// $("#main").append(["Josh Fritz"]);

var email = "joshua.l.fritz@gmail.com";
var udacityEmail =
    email.replace("gmail", "udacity");
console.log(email);
console.log(udacityEmail);

var awesomeThoughts = "My name is Josh and I am awesome!";
var funThoughts =
    awesomeThoughts.replace("awesome", "fun");

//$("#main").append(funThoughts);
var formattedName = HTMLheaderName.replace("%data%", "Josh Fritz");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

var Array = [];
Array.last() = 