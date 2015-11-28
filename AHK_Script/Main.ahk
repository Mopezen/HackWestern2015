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


browser.navigate("https://www.kijiji.ca/p-post-ad.html?categoryId=109")

while browser.ReadyState != 4 
	Sleep 100

browser.document.getElementById("adType1").checked := true
browser.document.getElementById("priceAmount").value := "100"
browser.document.getElementById("forsaleby_s").checked := true
browser.document.getElementById("moreinfo_s").selectedIndex := 1
browser.document.getElementById("postad-title").value := "Eng Text Book"

browser.document.getElementById("ImageUploadButton").click()
; TODO
; Need to hide img upload from user
; Need to allow appropriate delay for imgs to load before submitting add

return
; end of 'main'