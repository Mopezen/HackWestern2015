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


browser.navigate("https://www.kijiji.ca/t-login.html")

while browser.ReadyState != 4 
	Sleep 100


browser.document.getElementById("LoginEmailOrNickname").value := "myEmail@domain.com"
browser.document.getElementById("login-password").value := "kijiji_pw"

while browser.ReadyState != 4 
	Sleep 100

browser.document.getElementById("SignInButton").click()
; browser.document.form.Submit()

while browser.ReadyState != 4 
	Sleep 100

return
; end of 'main'