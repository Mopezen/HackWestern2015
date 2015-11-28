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
browser.ToolBar := False


browser.navigate("https://www.kijiji.ca/p-post-ad.html?categoryId=109")

while browser.ReadyState != 4 
	Sleep 100

browser.document.getElementById("adType1").checked := true
browser.document.getElementById("priceAmount").value := "100"




; a := browser.document.getElementById("priceAmount").innerText()
; .value := "100"




return
; end of 'main'

fxn(){


}