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

skills = ["dancing", "biking", "hiking", "drone building", "quadcopter racing, 250 class"];

var bio = {
    "name": "Josh Fritz",
    "role": "Team Lead Safety Systems",
    "contact info": "111-000-1234",
    "picture url": "http:google.com",
    "welcome message" : "Welcome to the thunderdome...",
    "skills": skills
};

for (data in bio){
    $("#main").append(bio[data]);
};