#https://gitlab.com/foo-dogsquared/dotfiles/
#!/usr/bin/env bash

#############
# CONSTANTS #
#############

readonly _script_name=$(basename $0)
readonly _record_process_name='(/\S+)*ffmpeg\s.*\sx11grab\s.*'
readonly _process_id="$$"

readonly screenshot_directory="$HOME/Screenshots"
# readonly screenshot_directory="$(xdg-user-dir PICTURES)/screenshots"
readonly screenshot_msg_header="Screenshot"

readonly video_directory="$HOME/Screenshots"
readonly video_msg_header="Screencast"

readonly date_filename_format="+%F-%H-%M-%S"

# Exit the script on USR1 signal.
# This is useful for exiting out of the whole script even in subshells.
trap 'notify-send "rofi-screenshot-menu has exited" && exit 1' 10

mkdir -p $screenshot_directory
mkdir -p $video_directory


#####################
# UTILITY FUNCTIONS #
#####################

# Setting the default command for ffmpeg.
ffmpeg() {
  command ffmpeg -hide_banner -loglevel error -nostdin "$@"
}

# Set the default command for rofi.
rofi() {
  command rofi -theme $HOME/.config/rofi/screenshot/screenshot.rasi "$@" || kill -USR1 "$_process_id"
  # command rofi -theme themes/fds-center-menu "$@" || kill -USR1 "$_process_id"
}

# Set the default command for slop.
slop() {
  command slop "$@" || kill -USR1 "$_process_id"
}

# Convert a video to GIF.
# $1 - The input file.
# $2 - The output file.
video_to_gif() {
  local input="$1"
  local output="$2"
  ffmpeg -i "$input" -vf palettegen -f image2 -c:v png - |
  ffmpeg -i "$input" -i - -filter_complex paletteuse "$output"
}

# Create a countdown with desktop notifications.
# $1 - The duration of the countdown.
# $2 - The header of the notification.
_countdown() {
  local counter="$((${1:-3}))"
  local msg="${2:-Countdown}"
  while [[ $counter -ne 0 ]]; do
    notify-send "$msg" "Countdown in $counter seconds" --expire-time 1000
    sleep 1
    counter=$((counter - 1))
  done
}

# Check for the recording process.
_check() {
  pgrep --full --exact --newest "$_record_process_name" 1>/dev/null
}

# Kill the recording process.
_kill() {
  pkill --full --exact --newest "$_record_process_name"
}


######################
# SCREENSHOT OPTIONS #
######################

# Most of the functions here have helpful documentations like the following function.
# Pretty handy, eh?

# Capture region to clipboard.
# $1 - Delay (in seconds) before screenshot.
#      If it's >=0, there's no countdown (obviously).
capture_region_to_clipboard() {
  notify-send "$screenshot_msg_header" "Select a region to capture"

  local geometry=$(slop -n -f '-g %g ')

  local delay=${1:-0}
  if [ $delay -gt 0 ]; then
    _countdown $delay "Screenshot"
  fi

  ffcast -q "$geometry" png /tmp/screenshot_clip.png
  xclip -selection clipboard -t image/png /tmp/screenshot_clip.png && \
  notify-send "$screenshot_msg_header" "Region copied to clipboard"
  rm /tmp/screenshot_clip.png
}

# Capture region to file.
# $1 - Delay (in seconds) before screenshot.
#      If the argument is set >=0, there's no countdown.
capture_region_to_file() {
  notify-send "$screenshot_msg_header" "Select a region to capture"
  dt=$(date "$date_filename_format")

  local image_file="$screenshot_directory/$dt.png"
  local geometry=$(slop -n -f '-g %g ')

  local delay=${1:-0}
  if [ $delay -gt 0 ]; then
    _countdown $delay "Screenshot"
  fi

  ffcast -q "$geometry" png "$image_file"
  notify-send "$screenshot_msg_header" "Region saved as $image_file"
}

# Capture screen to clipboard.
# Since delaying a screen capture is pretty easy, there's no delay option.
# Just make one of your own, please.
capture_screen_to_clipboard() {
  ffcast -q png /tmp/screenshot_clip.png
  xclip -selection clipboard -t image/png /tmp/screenshot_clip.png
  rm /tmp/screenshot_clip.png
  notify-send "$screenshot_msg_header" "Screenshot copied to clipboard"
}

# Capture screen to file.
# (See, I have written very helpful comments like this one.)
capture_screen_to_file() {
  dt=$(date "$date_filename_format")

  local image_file="$screenshot_directory/$dt.png"
  ffcast -q png "$image_file"
  notify-send "Screenshot" "Screenshot saved as $image_file"
}


######################
# SCREENCAST OPTIONS #
######################

# Record region to GIF.
# $1 - Delay (in seconds) before recording.
record_region_to_gif() {
  notify-send "$video_msg_header" "Select a region to record"
  dt=$(date "$date_filename_format")

  local geometry=$(slop -n -f '-g %g ' && _countdown)

  local delay=${1:-0}
  if [ $delay -gt 0 ]; then
    _countdown $delay "Screencast"
  fi

  ffcast -q  rec /tmp/screenshot_gif.mkv
  notify-send "$video_msg_header" "Converting to gif... (this can take a while)"

  local recording_file="$video_directory/$dt.gif"
  video_to_gif /tmp/screenshot_gif.mp4 $recording_file
  rm /tmp/screenshot_gif.mp4
  notify-send "$video_msg_header" "Recording saved as $recording_file"
}

record_screen_to_gif() {
  dt=$(date "$date_filename_format")
  ffcast -q rec /tmp/screenshot_gif.mp4
  notify-send "$video_msg_header" "Converting to GIF... (this can take a while)"

  local recording_file="$video_directory/$dt.gif"
  video_to_gif /tmp/screenshot_gif.mp4 "$screenshot_directory/$dt.gif"
  rm /tmp/screenshot_gif.mp4
  notify-send "$video_msg_header" "Recording saved to $screenshot_directory"
}

# Record region to MKV.
# $1 - Delay (in seconds) before recording.
record_region_to_mkv() {
  notify-send "$video_msg_header" "Select a region to record"
  dt=$(date "$date_filename_format")

  local delay=${1:-0}
  if [ $delay -ge 0 ]; then
    _countdown $delay "Screencast"
  fi

  local geometry=$(slop -n -f '-g %g ' && _countdown)
  local video_file="$video_directory/$dt.mkv"
  ffcast -q "$geometry" rec "$video_file"
  notify-send "$video_msg_header" "Recording saved as $video_file"
}

record_screen_to_mkv() {
  dt=$(date "$date_filename_format")

  local video_file="$video_directory/$dt.mkv"
  ffcast -q rec "$video_file"
  notify-send "$video_msg_header" "Recording saved as $video_file"
}


######################
# COMMAND LINE STUFF #
######################

get_options() {
  echo "  Capture Region  Clip"
  echo "  Capture Region  File"
  echo "  Capture Screen  Clip"
  echo "  Capture Screen  File"
  echo "  Record Region  File (GIF)"
  echo "  Record Screen  File (GIF)"
  echo "  Record Region  File (MKV)"
  echo "  Record Screen  File (MKV)"
}

# Checks if the shell has the following binary in $PATH through the `hash` builtin.
# $1 - The utility to look for.
check_deps() {
  if ! hash $1 2>/dev/null; then
    echo "Error: This script requires $1"
    exit 1
  fi
}

# The help string.
_help="Usage: $_script_name [OPTIONS]

Launches a Rofi menu for your screenshoting and screencasting needs.

Options:
  -h, --help    Prints the help section.
  --stop        Stop if there's an active process (e.g., a recording).
  --check       Exits successfully if there's an active process.
                The 'algorithm' for checking is very naive as it
                checks for a specific name so be sure to check the
                source code for yourself and update it accordingly.
"

main() {
  # Check dependencies.
  check_deps slop
  check_deps ffcast
  check_deps ffmpeg
  check_deps xclip
  check_deps rofi

  # Parsing the arguments.
  # Since getopts does not support long options so we'll have to roll our own.
  while [[ $# -gt 0 ]];
  do
    case $1 in
      -h|--help)
        printf "$_help" && exit 0
        ;;
      --stop)
        _kill
        exit $!
        ;;
      --check)
        _check
        exit $!
        ;;
      *)
        shift
        ;;
    esac
  done

  # Get choice from Rofi.
  choice=$( (get_options) | rofi -dmenu -i -fuzzy -p "" -theme $HOME/.config/rofi/screenshot/screenshot.rasi "Screenshot" )

  # If user has not picked anything, exit.
  if [[ -z "${choice// }" ]]; then
      exit 1
  fi

  # Run the selected command.
  case $choice in
    '  Capture Region  Clip')
      delay=$(rofi -dmenu -p "Delay In Seconds")
      capture_region_to_clipboard $delay
      ;;
    '  Capture Screen  Clip')
      delay=$(rofi -dmenu -p "Delay In Seconds")
      capture_screen_to_clipboard $delay
      ;;
    '  Capture Region  File')
      delay=$(rofi -dmenu -p "Delay In Seconds")
      capture_region_to_file $delay
      ;;
    '  Capture Screen  File')
      delay=$(rofi -dmenu -p "Delay In Seconds")
      _countdown $delay
      capture_screen_to_file
      ;;
    '  Record Region  File (GIF)')
      delay=$(rofi -dmenu -p "Delay In Seconds")
      record_region_to_gif $delay
      ;;
    '  Record Screen  File (GIF)')
      delay=$(rofi -dmenu -p "Delay In Seconds")
      _countdown $delay
      record_screen_to_gif
      ;;
    '  Record Region  File (MKV)')
      delay=$(rofi -dmenu -p "Delay In Seconds")
      record_region_to_mkv $delay
      ;;
    '  Record Screen  File (MKV)')
      delay=$(rofi -dmenu -p "Delay In Seconds")
      _countdown $delay
      record_screen_to_mkv
      ;;
  esac
}

main $1
