Kj.AddressValidator=function(){"use strict";var a={"init":function(a){this.checkPassedArgs(a),this.opt=a,this.defaults(),this.cache(),this.bindListeners(),this.loadDependencies()},"defaults":function(){this.geocodingDone=!1,this.currentPlaces=[],this.useLatLng=this.opt.defaultLatField&&this.opt.defaultLngField&&this.opt.latField&&this.opt.lngField},"checkPassedArgs":function(a){Kj.Utilities.verifyPassedArgs({"val":a,"required":!0,"typeofString":"object","name":"argument","lengthMin":!0}),Kj.Utilities.verifyPassedArgs({"val":a.field,"required":!0,"typeofString":"object","name":"field","lengthMin":!0}),Kj.Utilities.verifyPassedArgs({"val":a.defaultLatField,"required":!1,"typeofString":"object","name":"defaultLatField","lengthMin":!0}),Kj.Utilities.verifyPassedArgs({"val":a.defaultLngField,"required":!1,"typeofString":"object","name":"defaultLngField","lengthMin":!0}),Kj.Utilities.verifyPassedArgs({"val":a.latField,"required":!1,"typeofString":"object","name":"latField","lengthMin":!0}),Kj.Utilities.verifyPassedArgs({"val":a.lngField,"required":!1,"typeofString":"object","name":"lngField","lengthMin":!0}),Kj.Utilities.verifyPassedArgs({"val":a.modal,"required":!0,"typeofString":"object","name":"modal"}),Kj.Utilities.verifyPassedArgs({"val":a.addressSuffix,"typeofString":"string","name":"addressSuffix"}),Kj.Utilities.verifyPassedArgs({"val":a.libraryCallback,"required":!1,"typeofString":"function","name":"libraryCallback"}),Kj.Utilities.verifyPassedArgs({"val":a.libraryName,"required":!1,"typeofString":"string","name":"libraryName"})},"cache":function(){this.dom={},this.dom.$field=this.opt.field,this.dom.$form=this.opt.field.closest("form"),this.dom.$defaultLatitudeField=this.opt.defaultLatField,this.dom.$defaultLongitudeField=this.opt.defaultLngField,this.dom.$latitudeField=this.opt.latField,this.dom.$longitudeField=this.opt.lngField,this.dom.$cityField=$("#pstad-city"),this.dom.$provinceField=$("#pstad-province"),this.dom.$addressField=$("#pstad-map-address"),this.dom.$modal=this.opt.modal,this.dom.$modal.$ok=this.opt.modal.find("#AddressOK"),this.dom.$modal.$area=this.dom.$modal.find("#geocode_choice")},"bindListeners":function(){this.dom.$modal.$ok.bind("click",$.proxy(this.modalCloseCallback,this))},"loadDependencies":function(){b.init({"library":{"name":this.opt.libraryName,"callback":this.opt.libraryCallback}})},"cleanValue":function(a){return $.trim(a.replace(/[~!@$%^&*()+=_;:><|\{}\[\]\/]/gi,""))},"submitFormCallback":function(){var a=$.proxy(this.onSuccess,this),c=$.proxy(this.onError,this),d=this.cleanValue(this.dom.$field.val()),e=d.replace(" ","");return 0===e.length||""===e?(c(),!1):(d="undefined"!=typeof this.opt.addressSuffix?d+this.opt.addressSuffix:d,this.dom.$addressField.data("is-valid")===!0&&0!=this.dom.$latitudeField.val()&&0!=this.dom.$longitudeField.val()?this.dom.$form.trigger({"type":"submit","addressValidator":!0}):this.geocodingDone||b.getGeocoding(d,a,c),!0)},"modalCloseCallback":function(){var a=this.dom.$modal.$area.find("input:checked").val();this.commitValues(this.currentPlaces[a],!0)},"spawnModal":function(a){for(var b,c=0,d={"places":[]};c<a.length;c++)d.places.push(a[c].formatted_address);return b=Kj.Utilities.useTemplate({"template":"geocodingModalListItem","data":d}),this.dom.$modal.$area.html(b),Kj.initModalWindow({"modalID":this.dom.$modal}),b},"onSuccess":function(a){return this.currentPlaces=a,1===this.currentPlaces.length?void this.commitValues(this.currentPlaces[0],!1):void this.spawnModal(this.currentPlaces)},"onError":function(){this.useLatLng&&(this.dom.$addressField.data("use-postal",!0),this.dom.$latitudeField.val(this.dom.$defaultLatitudeField.val()),this.dom.$longitudeField.val(this.dom.$defaultLongitudeField.val())),this.geocodingDone=!0,this.dom.$form.trigger({"type":"submit","addressValidator":!0})},"commitValues":function(a,b){var c=this.opt.addressSuffix?a.formatted_address.replace(this.opt.addressSuffix,""):a.formatted_address;this.dom.$field.val(c).addClass("google-address"),this.useLatLng&&(this.dom.$latitudeField.val(a.geometry.location.lat()),this.dom.$longitudeField.val(a.geometry.location.lng())),this.setCityAndProvince(a.address_components),b&&Kj.api.ModalWindow.closeModalWindow(),this.geocodingDone=!0,this.dom.$form.trigger({"type":"submit","addressValidator":!0})},"setCityAndProvince":function(a){var b,c,d="administrative_area_level_1",e="locality";if(this.dom)for(b=0;b<a.length;b++)c=a[b],c.types[0]===d?this.dom.$provinceField.val(c.short_name):c.types[0]===e&&this.dom.$cityField.val(c.long_name)}},b={"init":function(a){this.checkPassedArgs(a),this.opt=a,this.defaults(),this.getGoogleAPILoader()},"defaults":function(){this.googleApiLoaderURL="https://www.google.com/jsapi",this.isReady=!1,this.fallbackTimeout=2e3,this.callInProgress=!1},"checkPassedArgs":function(a){Kj.Utilities.verifyPassedArgs({"val":a,"typeofString":"object","name":"argument"}),Kj.Utilities.verifyPassedArgs({"val":a.library,"typeofString":"object","name":"library"}),"undefined"!=typeof a&&Kj.Utilities.verifyPassedArgs({"val":a.googleApiClientID,"typeofString":"string","name":"googleApiClientID"})},"getGoogleAPILoader":function(){var a=$("<script/>");a.attr({"src":this.googleApiLoaderURL+"?callback=Kj.AddressValidator.geocodingAPIDelegate.onGoogleDependencyLoad","type":"text/javascript"}),a.appendTo("head")},"apiOnReady":function(){var a=this;if("function"==typeof google.load){var b="";"undefined"!=typeof this.googleApiClientID&&(b="client="+this.googleApiClientID+"&");var c=b+"&language="+encodeURIComponent(Kj.extVars.locale);"undefined"!=typeof a.opt.library.name&&(c+="&libraries="+a.opt.library.name),google.load("maps","3",{"callback":function(){a.geocoder=new google.maps.Geocoder,a.isReady=!0,void 0!==a.opt.library.callback&&a.opt.library.callback()},"other_params":c})}},"getGeocoding":function(a,b,c){var d=this;d.callInProgress=!0;var e=setTimeout(function(){return c(),d.callInProgress=!1,!0},this.fallbackTimeout);this.isReady?this.geocoder.geocode({"address":a},function(a,f){clearTimeout(e),d.processResponse(a,b,c),d.callInProgress=!1}):(c(),d.callInProgress=!1)},"processResponse":function(a,b,c){var d,e,f=this,g=[],h=a.length;if(0===h)return c(),!1;for(e=0;h>e;e++)d=a[e],d.formatted_address&&f.notInList(g,d.formatted_address)&&g.push(d);return b(g),!0},"notInList":function(a,b){var c=_.findWhere(a,{"formatted_address":b});return"undefined"==typeof c}};return{"test":{"AddressValidator":a,"GeocodingAPIDelegate":b},"geocodingAPIDelegate":{"onGoogleDependencyLoad":function(){b.apiOnReady()}},"initAddressValidator":function(b){a.init(b)},"api":{"AddressValidator":{"submitFormCallback":function(){return a.submitFormCallback()},"isGeocodingDone":function(){return a.geocodingDone}}}}}();