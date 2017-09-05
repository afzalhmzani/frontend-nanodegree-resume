/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name" : "Abdullah Alhmzani",
  "role": "Developer Advocate",
  "WelcomeMassage":"Hello to my online resume",
  "biopic":"images/197x148.gif",
  "contacts":{
    "mobile": "050-000-0000",
    "email":"test@test.com",
    "github":"afzalhmzani",
    "twitter":"@afzalhmzani",
    "location": "Riyadh"
  },
  "skills": [
    "Developer","photographer"
  ]
}

 var work = {
  "jobs":[
    {
      "employer": "IBM",
      "title": "Developer Advocate",
      "location": "Riyadh, Saudi Arabia",
      "date": "2017",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting\
                      industry. Lorem Ipsum has been the industry's standard dummy text\
                      ever since the 1500s, when an unknown printer took a galley of type\
                      and scrambled it to make a type specimen book. It has survived not only\
                      five centuries, but also the leap into electronic"
    },
    {
      "employer": "MOI",
      "title": "Application Developer",
      "location": "Hail, Saudi Arabia",
      "date": "2011",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting\
                      industry. Lorem Ipsum has been the industry's standard dummy text\
                      ever since the 1500s, when an unknown printer took a galley of type\
                      and scrambled it to make a type specimen book. It has survived not only\
                      five centuries, but also the leap into electronic"
    }

  ],
  "display": function() {
  }
}

var projects = {
  "projects":[
    {
      "title":"test Project",
      "date":"2017",
      "description": "here just to write dummy desc",
      "images":[
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    },
    {
      "title":"test Project2",
      "date":"2017",
      "description": "here just to write dummy desc",
      "images":[
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    }
  ]
}

var education ={
  "schools":[
    {
      "name":"University of Hail",
      "location":"Hail, Saudi Arabia",
      "degree": "BS",
      "Date":2012,
      "url":"https://example",
      "majores":["software Engineering"]
    },
    {
      "name":"University of Texas at Arlington",
      "location":"Arlington, TX, USA",
      "degree": "Language School",
      "Date":2014,
      "url":"https://example",
      "majores":["ESL"]
    },
    {
      "name":"Carroll University",
      "location":"Waukesha, WI, USA",
      "degree": "MS",
      "Date":2016,
      "url":"https://example",
      "majores":["software Engineering"]
    }
  ],
  "onlineCourses":[
    {
      "title":"Fornt-End",
      "school":"Udacity",
      "dates":"2017",
      "url":"https://example2"
    }
  ],
  "display":function(){

  }
}

// var formattedWorkEmployer =  HTMLworkEmployer.replace("%data%", jobs.employer);
//this is for header section
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole= HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedName);
$("#header").append(formattedRole);

//this is for contact section
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLmobile.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
// var location = HTMLlocation.replace("%data%", bio.contacts.location);



//this is for bioimage & welcomMessage
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomMsg = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMassage);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomMsg);

//skills:
if (bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkills);
}

//jobs:
function displayWork(){
  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedWorkEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
    $(".work-entry:last").append(formattedWorkDates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedWorkLocation);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkDescription);
  }
  // console.log(work.jobs.title);
}
displayWork();

projects.display = function(){
  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
    $(".project-entry:last").append(formattedDate);
    var formatteddescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formatteddescription);

    if(projects.projects[project].images.length > 0){
      for (image in projects.projects[project].images){
        var formattedImage= HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}
projects.display();

function displayEducation(){
  for(school in education.schools){
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedSchoolName);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolDegree);
    var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].Date);
    $(".education-entry:last").append(formattedSchoolDate);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    if(education.schools[school].majores.length>0){
      for(major in education.schools[school].majores){
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majores[major]);
        $(".education-entry:last").append(formattedSchoolMajor);
      }
    }
  }
  for(online in education.onlineCourses){
    $("#education").append(HTMLonlineClasses);

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
    $(".education-entry:last").append(formattedOnlineTitle);

    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
    $(".education-entry:last").append(formattedOnlineSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
    $(".education-entry:last").append(formattedOnlineDates);

    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
    $(".education-entry:last").append(formattedOnlineURL);
  }
}
displayEducation();


 $("#topContacts").append(formattedMobile);
 $("#topContacts").append(formattedEmail);
 $("#topContacts").append(formattedTwitter);
 $("#topContacts").append(formattedGitHub);

var googleMap
 $("#mapDiv").append(googleMap);



// footerContacts
$("#footerContacts").append(formattedMobile);
 $("#footerContacts").append(formattedEmail);
 $("#footerContacts").append(formattedTwitter);
 $("#footerContacts").append(formattedGitHub);

 // $("#topContacts").append(location);
