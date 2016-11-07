//Javascript file


//initialize( "riZJaCZZkuL63zrNeVrSfSAojV5sLAKkrdwIRAF7","AGLjXQnq1YUEccXDzdF4AbkEMEGMTeNjTUbwZBJ2");

//initializes Parse
Parse.initialize("M3yxJkfn0i2aE5uRTxolckPjpmzyEvNyZERdsqYL", "xWwqoDkmwSTO8kAeTR8Bz6fqAxYm8EuYi11SCC5j");


// var TestObject = Parse.Object.extend("TestObject");
// var testObject = new TestObject();
// testObject.save({foo: "bar"}).then(function(object) {
//   alert("yay! it worked");
// });

// G L O B A L   V A R I A B L E S
function convertToCoordinates(){

var geocoder = new google.maps.Geocoder();
address = document.getElementById("orgLocation").value;


geocoder.geocode( { 'address': address}, function(results, status) {

	   if (status == google.maps.GeocoderStatus.OK) {
	     latitude = results[0].geometry.location.lat();
	     longitude = results[0].geometry.location.lng();
	    // alert(latitude);

	    console.log(latitude);
	    

	  }

	});
	

}

var dateAndTime;

//var location;

//var orgLocation;

var latitude;

var longitude;

var address;



// Simple syntax to create a new subclass of Parse.Object.
var OrgEvent = Parse.Object.extend("Post");


document.getElementById("submitBtn").onclick = storeInput;




//This function takes in user input and saves it to Parse
function storeInput(){

var orgEvent = new OrgEvent();

var orgName = document.getElementById("orgName").value;

var orgLocation = document.getElementById("orgLocation").value;

var orgDescription = document.getElementById("orgDescription").value;

var orgDiscipline = document.getElementById("orgDiscipline").value;





//editing date and time before passing them in

parseDateAndTime();

var orgDate = dateAndTime;
console.log(orgDate);




//getting geopoints of input address
// convertToCoordinates();
var geocoder = new google.maps.Geocoder();
address = document.getElementById("orgLocation").value;


geocoder.geocode( { 'address': address}, function(results, status) {

	   if (status == google.maps.GeocoderStatus.OK) {
	     latitude = results[0].geometry.location.lat();
	     longitude = results[0].geometry.location.lng();
	    // alert(latitude);

	    console.log(latitude);
	    

	  }

orgEvent.set("orgName", orgName);
orgEvent.set("orgLocation", orgLocation);
orgEvent.set("sTime",orgDate);
orgEvent.set("latitude",latitude);
orgEvent.set("longitude",longitude);
orgEvent.set("description",orgDescription);
orgEvent.set("discipline",orgDiscipline);

console.log(latitude);

//uploading to Parse
orgEvent.save(null, {
  success: function(orgEvent) {
    // Execute any logic that should take place after the object is saved.
    alert("Successfully posted event!");
  },
  error: function(orgEvent, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});

	});








//Setting properties of organization
// orgEvent.set("orgName", orgName);
// orgEvent.set("orgLocation", orgLocation);
// orgEvent.set("sTime",orgDate);
// orgEvent.set("latitude",latitude);
// orgEvent.set("longitude",longitude);
// orgEvent.set("description",orgDescription);

// //uploading to Parse
// orgEvent.save(null, {
//   success: function(orgEvent) {
//     // Execute any logic that should take place after the object is saved.
//     alert('New object created with objectId: ' + orgEvent.id);
//   },
//   error: function(orgEvent, error) {
//     // Execute any logic that should take place if the save fails.
//     // error is a Parse.Error with an error code and message.
//     alert('Failed to create new object, with error code: ' + error.message);
//   }
// });



}

// var str1 = "2016-11-28"

// var str2 = "8:10:21";

// var str3 = " ";

// var x = str3.concat(str2);

// var input = str1.concat(x);



// var date = Date.parse(input);

// alert(date);

// // var x = typeof(date);

// // alert(x);


function parseDateAndTime(){

var date = document.getElementById("orgDate").value;
var time = document.getElementById("orgStart").value;


var str1 = date;

var str2 = time;

var str3 = " ";

var x = str3.concat(str2);

var result = str1.concat(x);

dateAndTime = Date.parse(result);

}

function saveToParse(){

var orgEvent = new OrgEvent();

var orgName = document.getElementById("orgName").value;
// var orgDate = document.getElementById("orgDate").value;
var orgLocation = document.getElementById("orgLocation").value;
// var orgStart = document.getElementById("orgStart").value;
var orgDescription = document.getElementById("orgDescription").value;

orgEvent.set("orgName", orgName);
orgEvent.set("orgLocation", orgLocation);
orgEvent.set("sTime",orgDate);
orgEvent.set("latitude",latitude);
orgEvent.set("longitude",longitude);
orgEvent.set("description",orgDescription);

//uploading to Parse
orgEvent.save(null, {
  success: function(orgEvent) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + orgEvent.id);
  },
  error: function(orgEvent, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});
}












// var orgLatitude = latitude;
// var orgLongitude = longitude;

// alert(orgLatitude+""+orgLongitude);













