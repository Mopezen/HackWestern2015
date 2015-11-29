;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;; TODO
;;;;;;;; instead of .click() we want to use .checked := true
;;;;;;;; then enable the button and submit the form. Faster? 
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;







; AutoHotkey Version: 1.x
; Language:       English
; Platform:       Win9x/NT
; Author:         A.N.Other <myemail@nowhere.com>
;
; Script Function:
;	Template script (you can customize this template by editing "ShellNew\Template.ahk" in your Windows folder)
;

#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

browser := ComObjCreate("InternetExplorer.Application")

browser.Visible := True
; browser.Visible := False
browser.ToolBar := False


; browser.navigate("https://www.kijiji.ca/m-my-ads.html?uli=true#/PENDING#PENDING")		;testing. Not used in final version
browser.navigate("https://www.kijiji.ca/m-my-ads.html?uli=true")

while browser.ReadyState != 4 
	Sleep 100

ad_chkBx := browser.document.getElementsByClassName("check-ad ng-pristine ng-valid")

while browser.ReadyState != 4
	Sleep 1000

sz := ad_chkBx.length
i := 0
loop,%sz%{
	ad_chkBx[i].checked := true
	i+= 1
}

while browser.ReadyState != 4 
	Sleep 100

browser.document.getElementById("CtaDelete").setAttribute("class", "cta-delete-all button-task ng-scope");

return
; end of 'main'