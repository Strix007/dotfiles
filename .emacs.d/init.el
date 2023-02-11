;; Enable server mode (daemon) for this Emacs session
(server-start)

;; Move customization variables to a separate file and load it
(setq custom-file (concat user-emacs-directory "custom-set-variables.el"))
(load custom-file 'noerror 'nomessage)
;; Change the location of the native compilation cache
(when (fboundp 'startup-redirect-eln-cache)
  (startup-redirect-eln-cache
   (convert-standard-filename
    (expand-file-name  "var/eln-cache/" user-emacs-directory))))

;; Initialize package sources
(require 'package)
(setq package-archives '(
			 ("melpa" . "https://melpa.org/packages/")
                         ("org"   . "https://orgmode.org/elpa/")
                         ("elpa"  . "https://elpa.gnu.org/packages/")
			 ))

(package-initialize)
(unless package-archive-contents
  (package-refresh-contents))

;; Initialize use-package on non-Linux platforms
(unless (package-installed-p 'use-package)
  (package-install 'use-package))

(require 'use-package)
(setq use-package-always-ensure t)

;; No-littering
(use-package no-littering)
;; Move files that are saved when the edit in a buffer is saved to a direcotry under ~/.emacs.d
(setq auto-save-file-name-transforms `((".*" ,(no-littering-expand-var-file-name "auto-save/") t)))

;; Install doom-nord theme
(use-package doom-themes
  :init
  (setq doom-themes-enable-bold t)
  (setq doom-themes-enable-italic t)
  (setq doom-themes-padded-modeline nil)
  (doom-themes-neotree-config) 
  (doom-themes-org-config)
  (load-theme 'doom-nord t)
  )

;; Solaire
(use-package solaire-mode
  :init (solaire-global-mode +1)) 

;; Don't pop up UI dialogs when prompting
(setq use-dialog-box nil)
;; Disable startup message
(setq inhibit-startup-message t)

;; Disable not needed UI elements
(scroll-bar-mode -1) ; Disable visible scrollbar
(tool-bar-mode -1)   ; Disable the toolbar
(tooltip-mode -1)    ; Disable tooltips
(set-fringe-mode 10) ; Give some breathing room
(menu-bar-mode -1)   ; Disable the menu bar

;; Keybindings
(global-set-key (kbd "<escape>") 'keyboard-escape-quit)
(global-set-key (kbd "C-M-h") 'package-install)
(global-set-key (kbd "M-RET") 'shell)


;; Revert buffers when the underlying file has changed
(global-auto-revert-mode 1)

;; Line numbers
(column-number-mode)
(global-display-line-numbers-mode t)
;; Disable line numbers for some modes
(dolist (mode '(org-mode-hook
		term-mode-hook
		eshell-mode-hook
		shell-mode-hook
		term-mode-hook
		neotree-mode-hook
		))
  (add-hook mode (lambda () (display-line-numbers-mode 0))))

;; Font
(set-face-attribute 'default nil :font "JetBrains Mono" :height 125)
(defun efs/set-font-faces ()
  (message "Setting faces!")
  (set-face-attribute 'default nil :font "JetBrains Mono" :height 125)

  ;; Set the fixed pitch face
  (set-face-attribute 'fixed-pitch nil :font "JetBrains Mono" :height 125)

  ;; Set the variable pitch face
  (set-face-attribute 'variable-pitch nil :font "JetBrains Mono" :height 125 :weight 'regular))
(if (daemonp)
    (add-hook 'after-make-frame-functions
              (lambda (frame)
                (setq doom-modeline-icon t)
                (with-selected-frame frame
                  (efs/set-font-faces))))
  (efs/set-font-faces))

;; Evil
(use-package evil
  :init
  (setq evil-want-keybinding nil)
  :config
  (evil-mode 1)
  (define-key evil-insert-state-map (kbd "C-g") 'evil-normal-state)
  (evil-global-set-key 'motion "j" 'evil-next-visual-line)
  (evil-global-set-key 'motion "k" 'evil-previous-visual-line)
  (evil-set-undo-system 'undo-redo)
  )

;; Evil-collection
(use-package evil-collection
  :after evil
  :config
  (evil-collection-init)
  )

;; Evil-nerd-commenter
(use-package evil-nerd-commenter
  :init
  (evilnc-default-hotkeys))

;; All-the-icons
(use-package all-the-icons)

;; Projectile
(use-package projectile
  :config (projectile-mode +1)
  :bind 
  ("C-c p" . projectile-command-map)
  )

;; Dashboard
(use-package dashboard
  :init
  (setq dashboard-center-content t)
  (setq dashboard-set-footer nil)
  (setq dashboard-set-navigator t)
  (setq dashboard-set-file-icons t)
  (setq dashboard-set-init-info nil)
  (setq dashboard-show-shortcuts nil)
  (setq dashboard-set-heading-icons t)
  (setq initial-buffer-choice (lambda () (get-buffer-create "*dashboard*")))
  (setq dashboard-banner-logo-title "Welcome, Arbab")
  (setq dashboard-startup-banner "/home/arbab/.emacs.d/banner.jpg")
  (setq dashboard-items '(
                          (recents  . 5)
                          (bookmarks . 5)
                          (projects . 5)
                          ;;  (agenda . 5)
                          ;;  (registers . 5)
                          ))
  (setq dashboard-item-names '(
                               ;;  ("Recent Files:" . " Recent Files:")
                               ;;  ("Bookmarks:" . " Bookmarks:")
                               ;;  ("Projects:" . " Projects:")
                               ))
  :config
  (dashboard-setup-startup-hook)
  (dashboard-modify-heading-icons '((recents . "file-text")))
  )

;; Ace-pop-up menu
(use-package ace-popup-menu
  :init 
  (setq ace-popup-menu-show-pane-header t)
  :config 
  (ace-popup-menu-mode 1)
  )

;; Sublimity
(use-package sublimity
  :config (sublimity-mode 1)
  )

;; Neotree
(use-package neotree
  :init
  (setq neo-theme (if (display-graphic-p) 'icons 'arrow))
  (setq neo-smart-open t)
  :config 
  (add-to-list 'load-path "/some/path/neotree")
  :bind (
	 ("<f8>" . neotree-toggle)
	 )
  )

;; Emojify
(use-package emojify
  :hook (after-init . global-emojify-mode)
  )

;; Dirvish
(use-package dirvish
  :init (
	 dirvish-override-dired-mode
	 ))

;; Powerline
;; (use-package powerline
;; :config (powerline-center-evil-theme)
;; )
(use-package doom-modeline
  :init  
  (setq doom-modeline-indent-info t) 
  (setq doom-modeline-minor-modes nil)
  (doom-modeline-mode 1)
  )

;; Helpful
(use-package helpful
  :custom
  (setq counsel-describe-function-function #'helpful-callable)
  (setq counsel-describe-variable-function #'helpful-variable)
  :bind
  ("C-h f" . helpful-function )
  ("C-h c" . helpful-command)
  ("C-h v" . helpful-variable)
  ("C-h k" . helpful-key)
  )

;; Ivy
(use-package counsel
  :init (ivy-mode)
  :diminish ivy
  :bind (
	 ("C-s"     . swiper)
	 ("C-c C-r" . ivy-resume)
	 ("C-x r b" . counsel-bookmark)
	 ("<f6>"    . ivy-resume)
	 ("M-x"     . counsel-M-x)
	 ("C-x C-f" . counsel-find-file)
	 ("C-x b"   . counsel-switch-buffer)
	 ("<f1> l"  . counsel-find-library)
	 ("<f2> i"  . counsel-info-lookup-symbol)
	 ("<f2> u"  . counsel-unicode-char)
	 ("C-c g"   . counsel-git)
	 ("C-c j"   . counsel-git-grep)
	 ("C-c k"   . counsel-ag)
	 ("C-x l"   . counsel-locate)
	 ("C-x w"   . counsel-wmctrl)
         ))

;; Ivy-rich
(use-package ivy-rich
  :init
  (ivy-rich-mode 1)
  )

;; Rainbow-delimiters
(use-package rainbow-delimiters
  :hook (prog-mode . rainbow-delimiters-mode)
  )

;; Which-key
(use-package which-key
  :init
  (which-key-mode)
  (which-key-setup-side-window-right)
  :diminish which-key-mode
  :config
  (setq which-key-ide-delay 0)
  )

;; Counsel-spotify
(use-package counsel-spotify
  :init
  (setq counsel-spotify-client-id "021a3ba7d3084e0fab36b2c7ea07d536")
  (setq counsel-spotify-client-secret "b0ff80fc4db14384acd46888485d6945")
  )

;; Company
(use-package company
  :hook
  (emacs-lisp-mode . company-mode)
  ;; (after-init-hook . global-company-mode)
  )

;; General
(use-package general
  :init
  (general-auto-unbind-keys)
  :config
  (general-create-definer arbab/leader-keys
			  :keymaps '(normal insert visual emacs)
			  :prefix "SPC"
			  :global-prefix "C-SPC")
  (arbab/leader-keys
   ;; Spotify keybinds using counsel-spotify
   "s"  '(:ignore t :which-key "Spotify")
   "ss" '(counsel-spotify-toggle-play-pause :which-key "Play-Pause")
   "sa" '(counsel-spotify-search-artist     :which-key "Search Artist")
   "sd" '(counsel-spotify-search-album      :which-key "Search Album")
   "sv" '(counsel-spotify-search-playlist   :which-key "Search Playlist")
   "st" '(counsel-spotify-search-track      :which-key "Search Track")
   ))
