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


browser.navigate("https://www.kijiji.ca/m-my-ads.html?uli=true#/PENDING#PENDING")

while browser.ReadyState != 4 
	Sleep 100


; browser.document.getElementsByClassName("check-ad ng-pristine ng-valid")[0].checked := true
ad_chkBx := browser.document.getElementsByClassName("check-ad ng-pristine ng-valid")
; ad_chkBx[0].checked := true
; ad_chkBx[1].checked := true

; TODO make work
sz := browser.do/*cument.getElementsByClassName("check-ad ng-pristine ng-valid").length
cnt := 0
loop,(browser.document.getElementsByClassName("check-ad ng-pristine ng-valid")).length{
	ad_chkBx[cnt].checked := true
	cnt+=1
}

MsgBox % "Holdin*/g: "+cnt

; Dont need, maybe for later?
; browser.document.getElementById("adType1").checked := true
; browser.document.getElementsByClassName("button-task post-ad-button")[0].click()

return
; end of 'main'