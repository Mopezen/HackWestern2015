
<!DOCTYPE html>
<html lang="en">
  <head>
   
    <meta http-equiv="Content-Type" content="text/html;charset=us-ansi">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>HW User UI</title>
    
    <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>

    <!-- Bootstrap core CSS -->
    <link href="bootstrap/css/bootstrap.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="../../assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Custom styles for this template -->
    <link href="CSSFiles/index/carousel.css" rel="stylesheet">
	</head>
  <body>
	<form action="shit.php" method="post">
		<div>
			<label>Ad Type:
				<div class="form-section">
					<label>
						<input id="adType1" name="postAdFormf" type="radio" value="1" checked/>I am offering
							<span class ="ghostText">Select if your selling a book</span>
					</label><br>
					<label>
					<input id="adType2" name="postAdFormf" type="radio" value="2"/>I want
						<span class="example">Your buying a book?</span>
					</label>
				</div>
			</label>
		<div>

		<div>
			<label>Price:
			<div class="form-section">
				<label>
					<input id="priceType1" name="postAdFormff" type="radio"  value="1"checked/>Set Value:
					<input id="priceAmount" name="postAdFormp" type="text"/>
				</label><br>
				<label>
					<input id="priceType2" name="postAdFormff" type="radio" value="2"/>Set to free
				</label><br>
				<label>
					<input id="priceType1" name="postAdFormff" type="radio" value"3"/>Set to contact me
				</label><br>
				<label>
					<input id="priceType1" name="postAdFormff" type="radio" value="4"/>Set to a swap/trade
				</label>
			</div>
			</label>
		<div>

		<div>
			<label>For Sale By:
			<div class="form-section">
				<label>
					<input id="saleBy" name="postAdForms" type="radio" value="1"checked/>Set to owner
					<span class="ghostText">You should always use this option</span>
				</label><br>
				<label>
					<input id="saleBy" name="postAdForms" type="radio" value="2"/>Set to business
				</label>
			</div>
			</label>
		<div>

		<div>
			<label>More Info:
			<div class="form-section">
				<select id="moreInfo">
					<option value="textbooks">Textbooks</option>
				</select>
			</div>
			</label>
		<div>
		<div>
			<br/>
			<a name="postAdForm.mapAddress"></a>
                            <label for="pstad-map-address" class="add-asterisk">Title:</label>
                                <input name="postAdFormt" type="title"/>
		<div>
       
	    <div>
			<br/>
			<a name="postAdForm.description"></a>
			 <label for="pstad-descrptn" class="add-asterisk">Description:</label>
			 <br/><textarea id="pstad-descrptn" name="postAdFormd" spellcheck="true" ></textarea><span class="field-message" data-for="pstad-descrptn"></span>
		<div>
		
		<div>
			<br/>
			<a name="postAdForm.mapAddress"></a>
                            <label for="pstad-map-address" class="add-asterisk">Address:</label>
                                <input name="postAdForm" type="text"/><span class="field-message" data-for="pstad-map-address"></span>
                                <p class="message"><span class ="ghostText">Enter your postal code and/or street address above.</span></p>
		<div>
		
		<div>
			<br/>
			<label>Images:</label>
                    <button id="ImageUploadButton" type="button" class="button-update-cancel short file-upload-button ">
                                Select Images</button>
                            <input type="hidden" name="file0" id="FileUploadInput" >
                        <span class="field-message" data-for="FileUploadInput"></span>
		<div>
		
		<div>
			<br/>
			<label for="YoutubeURL">YouTube Video:</label>
					<input id="YoutubeURL" name="postAdFormy" type="text" /><span class="field-message" data-for="YoutubeURL"></span>
					<p class="message"><span class ="ghostText">Add a YouTube video to your ad.</span></p>
					<p class="example">Example: http://www.youtube.com/watch?v=&lt;your video id&gt;</p>
		
		<div>
		
		<div>
			<br/>
		<label for="postAdForm.phoneNumber">Phone Number:</label>
                    <input id="PhoneNumber" name="postAdForp" type="text" /><p class="message"><span class ="ghostText">Your phone number will show up on your Ad.</span></p>
                    <span class="field-message" data-for="PhoneNumber"></span>
        <div> 
            <a id="email" name="postAdForm.email"></a>
			<br/><label for="pstad-email" class="add-asterisk">Email:</label>
					<input id="pstad-email" name="postAdForme" x-autocompletetype="email" data-type="email" req="req" type="text" /><span class="field-message" data-for="pstad-email"></span>
					<p class="message"><span class ="ghostText">Your email address will not be shared with others.</span></p>
		<div>	
			
		<div>
			<br/>
			<input type="submit">
			<input type="reset">
		<div>
		</form>
		<?php
	echo "<script> function test(elem0,ele1m,elem2,elem3,elem4,elem5,elem6,elem7,elem8,elem9,elem10,elem11,elem12,elem13,elem14,elem15){
	alert('TEST!');
	var elem = [document.getElementById('adType1'),
	document.getElementById('adType2'),
	document.getElementById('priceType1'),
	document.getElementById('priceAmount'),
	document.getElementById('priceType2'),
	document.getElementById('priceType3'),
	document.getElementById('priceType4'),
	document.getElementById('forsaleby_s'),
	document.getElementById('forsaleby_s'),
	document.getElementById('moreinfo_s'),
	document.getElementById('postad-title'),
	document.getElementById('pstad-descrptn'),
	document.getElementById('pstad-map-address'),
	document.getElementById('html5_1a56j6vdh58a1vbtpfc1nsjnpk3'),
	document.getElementById('YoutubeURL'),
	document.getElementById('PhoneNumber'),
	document.getElementById('pstad-email')];
	elem[0].checked = elem0;
	elem[1].checked = elem1;
	elem[2].checked = elem2;
	elem[3].value = elem3;
	elem[4].checked = elem0;
	elem[5].checked = elem0;
	elem[6].checked = elem0;
	elem[7].checked = elem0;
	elem[8].checked = elem8;
	elem[9].selectedIndex = elem9;
	elem[10].value = elem10;
	elem[11].value = elem111;
	elem[12].value = elem12;
	elem[13].checked = elem0;
	elem[14].value = elem14;
	elem[15].value = elem15;
	elem[16].value = elem16}

	test(".$_POST[postAdFormf][0].",".$_POST[postAdFormf][1].",".$_POST[postAdFormff].",".$_POST[postAdFormp].",".$_POST[postAdFormff].",".$_POST[postAdFormff].",".$_POST[postAdFormff].",".$_POST[postAdForms][0].",".$_POST[postAdForms][1].",".$_POST[postAdFormt].",".$_POST[postAdFormd].",".$_POST[postAdForm].",".$_POST[file0].",".$_POST[postAdFormy].",".$_POST[postAdFormp].",".$_POST[postAdForme].");
		</script>"
?>

	</body>
</html>

    

