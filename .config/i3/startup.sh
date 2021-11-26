#!/bin/bash

# Wallpaper Uitlity (Currently: Nitrogen)

nitrogen --restore

# Rclone

rclone mount --daemon Drive_arbabashruff: ~/Mount/arbabashruff@gmail.com/ &

# Xfce Power Manager

xfce4-power-manager &

# Session Utility

lxsession &

# Pulseaudio Volume Manager In SysTray

volumeicon &

# WLAN SysTray Utility Using NetworkManager (Currently: NM-Applet)

nm-applet &

# SysTray App For KdeConnect

kdeconnect-indicator