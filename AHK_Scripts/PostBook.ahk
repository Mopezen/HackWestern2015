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

; browser.document.getElementById("ImageUploadButton").click()

; while browser.ReadyState != 4 
; 	Sleep 100	

ImportPics("C:\Users\Juan Zapata\OneDrive\Documents\For_Sale\TextBooks\DBMS",15000)

browser.document.getElementById("adType1").checked := true
browser.document.getElementById("priceAmount").value := "120"
browser.document.getElementById("forsaleby_s").checked := true
browser.document.getElementById("moreinfo_s").selectedIndex := 1
browser.document.getElementById("postad-title").value := "Database Systems: A Practical Appr...& Management 6th Ed- SE3309"

browser.document.getElementById("pstad-descrptn").value := "This textbook is used for the Third Year Engineering Program Database Management System course at UWO for Software Engineers. `n `nThe exam is open textbook, making this textbook a great advantage. `n `nISBN-10: 0132943263 `nISBN-13: 978-0132943260 `n `nMinor folding damage shown in pictures. `n `nFor more details feel free to text or call `n519-854-1346 "

browser.document.getElementById("pstad-map-address").value := "N6G-0K2"
browser.document.getElementById("PhoneNumber").value := "519-854-1346"
browser.document.getElementById("pstad-email").value := "jzapata110391@live.com"

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;; TODO
;;;;;;;; Need to hide img upload from user
;;;;;;;; Need to allow appropriate delay for imgs to load before submitting add
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; browser.document.getElementById("ImageUploadButton").click()
; while browser.ReadyState != 4 
; 	Sleep 100

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; browser.document.getElementsByClassName("button-task post-ad-button")[0].click()

while browser.ReadyState != 4 
	Sleep 100

; Sleep 10000
; MsgBox, "Done waiting"
; browser.quit()

return
; end of 'main'


; ImportPics(pic_path,theDelay = 5000){
; 	; First thing because it takes forever! Get the images
; 	Sleep, 1000

; 	MouseClick, left, 720, 400

; 	; Locate path
; 	Send, {CTRLDOWN}l{CTRLUP}
; 	Sleep, 1000
; 	Send, %pic_path%{ENTER}
; 	Sleep, 300
; 	MouseClick, left,  630, 570
; 	Sleep, 300
; 	Send, {CTRLDOWN}a{CTRLUP}{ENTER}
; 	Sleep, theDelay
; 	; MouseClick, left, 31, 179
; 	; Sleep, 300
; 	; Send, {CTRLDOWN}{HOME}{CTRLUP}
; 	Sleep, 300
; }


ImportPics(pic_path,theDelay = 5000){
	; First thing because it takes forever! Get the images
	Send, {CTRLDOWN}f{CTRLUP}
	Sleep, 1000
	Send, select{SPACE}images{ENTER}{ESC}
	Sleep, 1000

	; Click the imgs button
	MouseClick, left,  560, 990

	Sleep, 1000
	; Locate path
	Send, {CTRLDOWN}l{CTRLUP}
	Sleep, 1000
	Send, %pic_path%{ENTER}
	Sleep, 300
	MouseClick, left,  630, 570
	Sleep, 300
	Send, {CTRLDOWN}a{CTRLUP}{ENTER}
	Sleep, theDelay
	MouseClick, left, 31, 179
	Sleep, 300
	Send, {CTRLDOWN}{HOME}{CTRLUP}
	Sleep, 300
}