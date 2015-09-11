'use strict';

var bio = {
    'name': 'Josh Fritz',
    'role': 'Team Lead Safety Systems',
    'contacts': {
        'mobil': '801-913-2165',
        'email': 'joshua.l.fritz@gmail.com',
        'github': 'github.com/tissofluffy',
        'twitter': 'Twitter is not for me',
        'location': 'Omaha NE'
        },
    'welcomeMessage' : 'Welcome to the thunderdome...',
    'skills': [
        {
            'name': 'dancing',
            'imgUrl': 'http://www.fontsaddict.com/images/icons/png/thumb/21097.png',
            'altText': 'International Ballroom Dancing'
        },
        {
            'name': 'biking',
            'imgUrl': 'http://www.fontsaddict.com/images/icons/png/thumb/21125.png',
            'altText': 'road and mountain biking'
        },
        {
            'name': 'drone building',
            'imgUrl': 'http://www.fontsaddict.com/images/icons/png/thumb/34170.png',
            'altText': 'Build and fly quadcopters'
        },
        {
            'name': '3d printing',
            'imgUrl': 'http://www.fontsaddict.com/images/icons/png/thumb/28360.png',
            'altText': 'First quadcopter was a 3d printed quadcopter :)'
        }],
    'biopic': 'images/profile_pic.jpg',
    'display': function(){
        var formattedHTMLcontactGeneric = HTMLmobile.replace('%data%', bio.contacts.mobile);
        var formattedHTMLemail = HTMLemail.replace('%data%', bio.contacts.email);
        var formattedHTMLGithub = HTMLgithub.replace('%data%', bio.contacts.github);
        var formattedHTMLLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        $('#topContacts').append(formattedHTMLcontactGeneric, formattedHTMLemail, formattedHTMLGithub, formattedHTMLLocation);

        var formattedHTMLbioPic = HTMLbioPic.replace('%data%', bio.biopic);
        $('#header').append(formattedHTMLbioPic);

        $('#footerContacts').append(formattedHTMLcontactGeneric, formattedHTMLemail, formattedHTMLGithub, formattedHTMLLocation);
        var formattedHTMLWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);

        $('#header').append(formattedHTMLWelcomeMsg);

        if (bio.skills.length) {
            $('#header').append(HTMLskillsStart);
            for(var skill in bio.skills) {
                var formattedSkillImgUrl = HTMLskillsImg.replace('%data%', bio.skills[skill].imgUrl + ' \" alt=\"' + bio.skills[skill].altText);
                $('#skills').append(formattedSkillImgUrl);
            }
            var formattedHeaderRole = HTMLheaderRole.replace('%data%', bio.role);
            $('#header').prepend(formattedHeaderRole);
            var formattedHeaderName = HTMLheaderName.replace('%data%', bio.name);
            $('#header').prepend(formattedHeaderName);
        }
    }
};
$('#mapDiv').append(googleMap);
var projects = {
    'projects': [
        {
            'title': 'portfolio_1',
            'dates': 'Jul - Aug 2015',
            'description': 'My first git finished project from Udacity. I\'m proud to have come this far with an amazing course and great help from the Udacity team. I look forward to finishing my courses.',
            'imageUrl': 'http://michaelsseaver.com/wp-content/uploads/2013/08/learn.jpg'
        }
    ],
    'display': function(){
        for (var p in projects.projects){
            $('#projects').append(HTMLprojectStart);
            var formattedHTMLprojectTitle = HTMLprojectTitle.replace('%data%', projects.projects[p].title);
            var formattedHTMLprojectDates = HTMLprojectDates.replace('%data%', projects.projects[p].dates);
            var formattedHTMLprojectDescription = HTMLprojectDescription.replace('%data%', projects.projects[p].description);
            var formattedHTMLprojectImage = HTMLprojectImage.replace('%data%', projects.projects[p].imageUrl);
            $('.project-entry:last').append(formattedHTMLprojectImage, formattedHTMLprojectTitle, formattedHTMLprojectDates, formattedHTMLprojectDescription);
        }
    }
}
var education = {
    'schools': [
        {
            'name': 'Bellevue University',
            'location': 'Bellevue NE',
            'degree': 'Business Information Systems',
            'major': 'BS',
            'year': '2010'
        },
        {
            'name': 'UP Java Development Training',
            'location': '1400 Douglas St. Omaha NE',
            'major': 'NA',
            'year': '2015'
        },
        {
            'name': 'Leadership Training',
            'location': 'Okinawa Japan',
            'major': 'NA',
            'year': '2006'
        },
        {
            'name': 'Counseling Training',
            'location': 'Okinawa Japan',
            'major': 'NA',
            'year': '2005'
        }
    ],
    'display': function(){
        if(education.schools.length > 0){
            for(var school in education.schools){
                $('#education').append(HTMLschoolStart);
                var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
                var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
                var formattedDate = HTMLschoolDates.replace('%data%', education.schools[school].year);
                var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
                $('.education-entry:last').append(formattedName, formattedDate, formattedLocation, formattedMajor);
            }
        }
    }
};
var work = {
  'jobs': [
      {
          'title': 'Tactical Data Network Specialist',
          'company': 'United States Marine Corps',
          'location':'Yuma AZ',
          'dates':'July 2003- July 2007',
          'description':
              'Supervise a staff of 20 technicians, prioritize projects and workload, schedule assignments, and complete critical time-sensitive tasks. Was held accountable for the actions of my team by senior leadership'
      },
      {
          'title': 'LAN Administrator',
          'company': 'Infogroup',
          'location':'Ralston NE',
          'dates': 'July 2007-February 2010 ',
          'description':

                  'Provide technical support and customer service for IT-related problems across the company for both local and remote users' +
                  'Resolve application and software system problems impacting production' +
                  'Ensure workstations across the company are properly patched for vulnerabilities' +
                  'Create and maintain documentation for the Helpdesk and LAN Administration teams for use in configuration and maintenance procedures' +
                  'Create and maintain documentation for users to easily complete various IT tasks'

      },
      {
          'title': 'Executive LAN Administrator',
          'company': 'Infogroup',
          'location':'Ralston NE',
          'dates': 'February 2010-May 2011',
          'description':
              'Provide 24/7 “on-call” support for the leadership team, to include iPhone and MAC support'+
              'See LAN Administrator duties section at Infogroup below'

      },
      {
          'title': 'LAN Administrator',
          'company': 'Union Pacific',
          'location':'1400 Douglas St. Omaha NE',
          'dates': 'May 2011- Aug 2014',
          'description':
              'Provide technical support and customer service for IT-related problems across the company for both local and remote users'+
              'Resolve application and software system problems impacting production'+
              'Log, update, and analyze requests in TRM' +
              'Create and maintain documentation for the team to use for troubleshooting procedures'
      },
      {
          'title': 'Software Tech Lead',
          'company': 'Union Pacific',
          'location':'1400 Douglas St. Omaha NE',
          'dates': 'Aug 2014 – Present',
          'description':
              'Lead a team of seven developers to debug, enhance and maintain three safety software systems'
      }
  ],
  'display': function(){
      for (var job in work.jobs) {
          $('#workExperience').append(HTMLworkStart);
          var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].title);
          var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
          var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
          var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
          $('.work-entry:last').append(formattedEmployer, formattedLocation, formattedDates, formattedDescription);
      }
  }
};


