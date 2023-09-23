;;Startup Performance
(setq gc-cons-threshold (* 50 1000 1000))

;; Enable server mode (daemon) for this Emacs session
(server-start)
(if (daemonp)
    (message "Loading in the daemon!")
  (message "Loading in regular Emacs!")
  )

;; Fonts
(defun arbab/set-font-faces ()
  (message "Setting faces!")
  (set-face-attribute 'default nil        :font "JetBrains Mono" :height 125 :weight 'medium)
  (set-face-attribute 'fixed-pitch nil    :font "JetBrains Mono" :height 150 :weight 'medium)
  (set-face-attribute 'variable-pitch nil :font "Cantarell"      :height 150 :weight 'bold)
  )
(add-hook 'server-after-make-frame-hook 'arbab/set-font-faces)
;; Make comments italic
(add-hook 'find-file-hook (lambda () (set-face-attribute 'font-lock-comment-face nil :slant 'italic)))
;; Make keywords italic
(add-hook 'find-file-hook (lambda () (set-face-attribute 'font-lock-keyword-face nil :slant 'italic)))

;; Prettify-Symbols-mode
(add-hook 'prog-mode-hook 'prettify-symbols-mode)

;; Hl-line-mode
(add-hook 'prog-mode-hook 'hl-line-mode)
(add-hook 'text-mode-hook 'hl-line-mode)

;; Disable dired alternate file warning
(put 'dired-find-alternate-file 'disabled nil)

;; Set emacs window title
(setq frame-title-format '(buffer-file-name "%f" "%b"))

;; Native-comp
;; Silence compiler warnings
(setq native-comp-async-report-warnings-errors nil)
;; Set the right directory to store the native comp cache
(add-to-list 'native-comp-eln-load-path (expand-file-name "eln-cache/" user-emacs-directory))

;; Kill emacs with processes running without asking
(setq confirm-kill-processes nil)

(defun arbab/display-startup-time ()
  (message " Emacs loaded in %s with %d garbage collections."
           (format "%.2f seconds"
                   (float-time
                    (time-subtract after-init-time before-init-time)))
           gcs-done)
  )

(add-hook 'emacs-startup-hook #'arbab/display-startup-time)

;; Make all "~" files go into a seperate backup directory
(setq backup-directory-alist `(("." . "~/.emacs.d/backups/")))

;; Make shebang (#!) file executable when saved
(add-hook 'after-save-hook 'executable-make-buffer-file-executable-if-script-p)

;; Avoid errors on windows about the encoding system
(set-default-coding-systems 'utf-8)

;; Move customization variables to a separate file and load it
(setq custom-file (concat user-emacs-directory "custom-set-variables.el"))
(load custom-file 'noerror 'nomessage)

;; Change the location of the native compilation cache
(when (fboundp 'startup-redirect-eln-cache)
  (startup-redirect-eln-cache
   (convert-standard-filename
    (expand-file-name  "var/eln-cache/" user-emacs-directory)
    )
   )
  )

;; Load sensitive variables from file
(setq env (concat user-emacs-directory "env.el"))
(load env)

;; Don't pop up UI dialogs when prompting
(setq use-dialog-box nil)
;; Disable startup message
(setq inhibit-startup-message t)
;; Restore the last location of the cursor in a file
(save-place-mode +1)
;; Don’t warn for large files
(setq large-file-warning-threshold nil)
;; Don’t warn for following symlinked files
(setq vc-follow-symlinks t)

;; Modify UI elements
(scroll-bar-mode -1) ; Disable visible scrollbar
(tool-bar-mode -1)   ; Disable the toolbar
(tooltip-mode -1)    ; Disable tooltips
(set-fringe-mode 10) ; Give some breathing room
(menu-bar-mode -1)   ; Disable the menu bar
(fset 'yes-or-no-p 'y-or-n-p) ; Change yes/no to y/n

;; Disable scratch buffer message
(setq initial-scratch-message nil)

;; Set default connection mode to SSH
(setq tramp-default-method "ssh")

;; Indentation
(setq-default tab-width 2)
(setq-default evil-shift-width tab-width)
(setq-default indent-tabs-mode nil)

;; Save minibuffer history
(savehist-mode +1)

;; Cache any web request
(setq url-automatic-caching t)

;; Keybindings
(global-set-key (kbd "<escape>") 'keyboard-escape-quit)
(global-set-key (kbd "C-M-u") 'universal-argument)

;; Move point from window to window using Shift and the arrow keys
(windmove-default-keybindings)

;; Auto close brackets and quotes
(electric-pair-mode +1)
(electric-quote-mode +1)

;; Revert buffers when the underlying file has changed
(global-auto-revert-mode +1)
(setq global-auto-revert-non-file-buffers t)

;; Toggle automated performance mitigations for files with long lines
(global-so-long-mode +1)

;; Show matching parentheses
(show-paren-mode +1)
(setq show-paren-delay 0)

;; Line numbers
(column-number-mode)
(global-display-line-numbers-mode +1)
;; Relative line numbers
(setq display-line-numbers-type 'visual)

;; Disable line numbers for some modes
(dolist (mode '(
                completion-list-mode-hook
                org-mode-hook
                vundo-mode-hook
                dired-mode-hook
                Info-mode-hook
                tldr-mode-hook
                calendar-mode-hook
                org-agenda-mode-hook
                dashboard-mode-hook
                diff-mode-hook
                vterm-mode-hook
                compilation-mode-hook
                backtrace-mode-hook
                term-mode-hook
                imenu-list-major-mode-hook
                eshell-mode-hook
                shell-mode-hook
                term-mode-hook
                neotree-mode-hook
                which-key-mode
                special-mode
                helpful-mode-hook
                help-mode-hook
                treemacs-mode-hook
                woman-mode-hook
                undo-tree-visualizer-mode-hook
                tetris-mode-hook
                quickrun--mode-hook
                nov-mode-hook
                project-explorer-mode-hook
                nov-mode-hook
                xref--xref-buffer-mode-hook
                browse-kill-ring-mode-hook
                Custom-mode-hook
                deadgrep-mode-hook
                )
              )
  (add-hook mode (lambda () (display-line-numbers-mode 0)
                   )
            )
  )

;; Specific modes for specific file extensions
(add-to-list 'auto-mode-alist '("\\.rasi$" . conf-unix-mode))
(add-to-list 'auto-mode-alist '("\\lfrc\\'" . sh-mode))

;; Tree-sitter
;; Tell emacs where to find the language grammers
(setq treesit-language-source-alist
   '((bash "https://github.com/tree-sitter/tree-sitter-bash")
     (cmake "https://github.com/uyha/tree-sitter-cmake")
     (css "https://github.com/tree-sitter/tree-sitter-css")
     (elisp "https://github.com/Wilfred/tree-sitter-elisp")
     (go "https://github.com/tree-sitter/tree-sitter-go")
     (html "https://github.com/tree-sitter/tree-sitter-html")
     (javascript "https://github.com/tree-sitter/tree-sitter-javascript" "master" "src")
     (json "https://github.com/tree-sitter/tree-sitter-json")
     (make "https://github.com/alemuller/tree-sitter-make")
     (markdown "https://github.com/ikatyang/tree-sitter-markdown")
     (python "https://github.com/tree-sitter/tree-sitter-python")
     (toml "https://github.com/tree-sitter/tree-sitter-toml")
     (tsx "https://github.com/tree-sitter/tree-sitter-typescript" "master" "tsx/src")
     (typescript "https://github.com/tree-sitter/tree-sitter-typescript" "master" "typescript/src")
     (yaml "https://github.com/ikatyang/tree-sitter-yaml")
     )
   )

;; Remap major mode list
(setq major-mode-remap-alist
      '(
        (bash-mode . bash-ts-mode)
        (c++-mode . c++-ts-mode)
        (c-or-c++-mode . c-or-c++-ts-mode)
        (c-mode . c-ts-mode)
        (cmake-mode . cmake-ts-mode)
        (csharp-mode . csharp-ts-mode)
        (css-mode . css-ts-mode)
        (dockerfile-mode . dockerfile-ts-mode)
        (go-mod-mode . go-mod-ts-mode)
        (go-mode . go-ts-mode)
        (java-mode . java-ts-mode)
        (js-mode . js-ts-mode)
        (js2-mode . js-ts-mode)
        (json-mode . json-ts-mode)
        (python-mode . python-ts-mode)
        (ruby-mode . ruby-ts-mode)
        (rust-mode . rust-ts-mode)
        (toml-mode . toml-ts-mode)
        (tsx-mode . tsx-ts-mode)
        (typescript-mode . typescript-ts-mode)
        (yaml-mode . yaml-ts-mode)
        )
      )

;; Html-mode
;; Automatically close tags
(setq sgml-quick-keys 'close)
