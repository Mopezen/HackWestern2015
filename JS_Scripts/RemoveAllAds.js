// Launch the page. Wait until the page is loaded
// https://www.kijiji.ca/m-my-ads.html?uli=true

var ad_chkBx = document.getElementsByClassName("check-ad ng-pristine ng-valid");

// Delay until the reference is held on to. Was a small technicality for AHK

// Loop over the checkboxes and click them all

for (var i = 0; i < ad_chkBx.length; i++) {
	ad_chkBx[i].click();
};

// Delay until all the boxes are checked

document.getElementById("CtaDelete").click();

// Delay until the follow up pages is clicked

document.getElementById("DeleteSurveyOK").click()

// Delay until the ads complete deleting
// Then close the page (finish task)

return