

const mediaQuery = window.matchMedia('(max-width: 768px)')
const mediaQuery2 = window.matchMedia('(max-width: 368px)')


function home(){

  document.getElementById("link1").style.border = "";
  document.getElementById("link2").style.border = "none";
  document.getElementById("link3").style.border = "none";
  document.getElementById("link4").style.border = "none";

  document.getElementById("link1").style.opacity = "1";
  document.getElementById("link2").style.opacity = "0.7";
  document.getElementById("link3").style.opacity = "0.7";
  document.getElementById("link4").style.opacity = "0.7";


  document.getElementById("destination-body").style.display = "none";
  document.getElementById("home-body").style.display = "";
  document.getElementById("crew-body").style.display = "none";
  document.getElementById("technology-body").style.display = "none";
//  document.body.style.backgroundImage ="url('assets/home/home.jpg')";


// Check if the media query is true
if (mediaQuery.matches) {
// Then trigger an alert

document.getElementById("hr-top").style.display="none";
document.body.style.backgroundImage ="url('assets/home/home-tablet.jpg')";
}
else if (mediaQuery2.matches){
  document.body.style.backgroundImage ="url('assets/home/home-phone.jpg')";

}
else {
document.body.style.backgroundImage ="url('assets/home/home.jpg')";
}



  document.body.style.backgroundSize= cover;

}

function destination(){
 document.getElementById("link1").style.border = "none";
 document.getElementById("link2").style.border = "";
 document.getElementById("link3").style.border = "none";
 document.getElementById("link4").style.border = "none";

 document.getElementById("link-a").style.border = "";
 document.getElementById("link-b").style.border = "none";
 document.getElementById("link-c").style.border = "none";
 document.getElementById("link-d").style.border = "none";

 document.getElementById("link1").style.opacity = "0.7";
 document.getElementById("link2").style.opacity = "1";
 document.getElementById("link3").style.opacity = "0.7";
 document.getElementById("link4").style.opacity = "0.7";


  document.getElementById("home-body").style.display = "none";
  document.getElementById("destination-body").style.display = "";
  document.getElementById("crew-body").style.display = "none";
  document.getElementById("technology-body").style.display = "none";
  // document.body.style.backgroundImage ="url('assets/destination/destination.jpg')";



  // Check if the media query is true
  if (mediaQuery.matches) {
  // Then trigger an alert

  document.getElementById("hr-top").style.display="none";
  document.body.style.backgroundImage ="url('assets/destination/destination-tablet.jpg')";
  }
  else if (mediaQuery2.matches){
    document.body.style.backgroundImage ="url('assets/destination/destination-mobile.jpg')";

  }
  else {
  document.body.style.backgroundImage ="url('assets/destination/destination.jpg')";
  }

  document.body.style.backgroundSize= cover;
}

function crew(){

  document.getElementById("link1").style.border = "none";
  document.getElementById("link2").style.border = "none";
  document.getElementById("link3").style.border = "";
  document.getElementById("link4").style.border = "none";

  document.getElementById("link1").style.opacity = "0.7";
  document.getElementById("link2").style.opacity = "0.7";
  document.getElementById("link3").style.opacity = "1";
  document.getElementById("link4").style.opacity = "0.7";

  document.getElementById("home-body").style.display = "none";
  document.getElementById("destination-body").style.display = "none";
  document.getElementById("crew-body").style.display = "";
    document.getElementById("technology-body").style.display = "none";

  document.getElementById("crew-pilot").style.display = "none";
  document.getElementById("crew-specialist").style.display = "none";
  document.getElementById("crew-commander").style.display = "none";
  document.getElementById("crew-engineer").style.display = "";


  // Check if the media query is true
  if (mediaQuery.matches) {
  // Then trigger an alert

  document.getElementById("hr-top").style.display="none";
  document.body.style.backgroundImage ="url('assets/crew/crew-tablet.jpg')";
  }
  else if (mediaQuery2.matches){
    document.body.style.backgroundImage ="url('assets/crew/crew-mobile.jpg')";

  }
  else {
  document.body.style.backgroundImage ="url('assets/crew/crew.jpg')";
  }




  document.body.style.backgroundSize= cover;

}

function technology(){

  document.getElementById("link1").style.border = "none";
  document.getElementById("link2").style.border = "none";
  document.getElementById("link3").style.border = "none";
  document.getElementById("link4").style.border = "";

  document.getElementById("link1").style.opacity = "0.7";
  document.getElementById("link2").style.opacity = "0.7";
  document.getElementById("link3").style.opacity = "0.7";
  document.getElementById("link4").style.opacity = "1";

  document.getElementById("home-body").style.display = "none";
  document.getElementById("destination-body").style.display = "none";
  document.getElementById("crew-body").style.display = "none";
  document.getElementById("technology-body").style.display = "";


  document.getElementById("technologyCapsule").style.display = "none";
  document.getElementById("technologySpaceport").style.display = "none";
  document.getElementById("technologyVechile-mobile").style.display = "none";
  document.getElementById("technologyCapsule-mobile").style.display = "none";
  document.getElementById("technologySpaceport-mobile").style.display = "none";






    // Check if the media query is true
    if (mediaQuery.matches) {
    // Then trigger an alert

    document.getElementById("hr-top").style.display="none";
    document.body.style.backgroundImage ="url('assets/technology/technology-tablet.jpg')";
    document.getElementById("technologyVechile-mobile").style.display = "";
    document.getElementById("technologyVechile").style.display = "none";
  ;

    }
    else if (mediaQuery2.matches){
      document.body.style.backgroundImage ="url('assets/technology/technology-mobile.jpg')";
      document.getElementById("technologyVechile-mobile").style.display = "";
      document.getElementById("technologyVechile").style.display = "none";

    }
    else {
    document.body.style.backgroundImage ="url('assets/technology/technology.jpg')";
    document.getElementById("technologyVechile").style.display = "";
    document.getElementById("technologyVechile-mobile").style.display = "none";

    }







  // document.body.style.backgroundImage ="url('assets/technology/technology.jpg')"
  document.body.style.backgroundSize= cover;

}

function moon(){

  document.getElementById("link-a").style.border = "";
  document.getElementById("link-b").style.border = "none";
  document.getElementById("link-c").style.border = "none";
  document.getElementById("link-d").style.border = "none";


  document.getElementById("mars").style.display = "none";
  document.getElementById("moon").style.display = "";
  document.getElementById("europa").style.display = "none";
  document.getElementById("titan").style.display = "none";
  var selector1=document.querySelector(".img-dest");
  var imgChanger=(" assets/destination/moon.png");
  selector1.setAttribute("src", imgChanger );
}

function mars(){

  document.getElementById("link-a").style.border = "none";
  document.getElementById("link-b").style.border = "";
  document.getElementById("link-c").style.border = "none";
  document.getElementById("link-d").style.border = "none";

  document.getElementById("moon").style.display = "none";
  document.getElementById("mars").style.display = "";
  document.getElementById("europa").style.display = "none";
  document.getElementById("titan").style.display = "none";
  var selector1=document.querySelector(".img-dest");
  var imgChanger=(" assets/destination/mars.png");
  selector1.setAttribute("src", imgChanger );
}

function europa(){

  document.getElementById("link-a").style.border = "none";
  document.getElementById("link-b").style.border = "none";
  document.getElementById("link-c").style.border = "";
  document.getElementById("link-d").style.border = "none";

  document.getElementById("mars").style.display = "none";
  document.getElementById("moon").style.display = "none";
  document.getElementById("europa").style.display = "";
  document.getElementById("titan").style.display = "none";
  var selector1=document.querySelector(".img-dest");
  var imgChanger=(" assets/destination/europa.png");
  selector1.setAttribute("src", imgChanger );
}

function titan(){
  document.getElementById("link-a").style.border = "none";
  document.getElementById("link-b").style.border = "none";
  document.getElementById("link-c").style.border = "none";
  document.getElementById("link-d").style.border = "";

  document.getElementById("moon").style.display = "none";
  document.getElementById("mars").style.display = "none";
  document.getElementById("europa").style.display = "none";
  document.getElementById("titan").style.display = "";
  var selector1=document.querySelector(".img-dest");
  // var imgChanger=(" assets/destination/titan.png");
  var imgChanger=(" assets/destination/image-titan.webp");
  selector1.setAttribute("src", imgChanger );
}
function crewEngineer(){
  document.getElementById("crew-engineer").style.display = "";
  document.getElementById("crew-pilot").style.display = "none";
  document.getElementById("crew-commander").style.display = "none";
  document.getElementById("crew-specialist").style.display = "none";
}
function crewPilot(){
  document.getElementById("crew-pilot").style.display = "";
  document.getElementById("crew-engineer").style.display = "none";
  document.getElementById("crew-commander").style.display = "none";
  document.getElementById("crew-specialist").style.display = "none";
}
function crewCommander(){
  document.getElementById("crew-pilot").style.display = "none";
  document.getElementById("crew-engineer").style.display = "none";
  document.getElementById("crew-commander").style.display = "";
  document.getElementById("crew-specialist").style.display = "none";
}
function crewSpecialist(){
  document.getElementById("crew-pilot").style.display = "none";
  document.getElementById("crew-engineer").style.display = "none";
  document.getElementById("crew-commander").style.display = "none";
  document.getElementById("crew-specialist").style.display = "";
}
function technologyVechile() {
  document.getElementById("technologyCapsule").style.display = "none";

  document.getElementById("technologySpaceport").style.display = "none";


  // Check if the media query is true
  if (mediaQuery.matches) {
    // Then trigger an alert

    document.getElementById("hr-top").style.display="none";
    document.body.style.backgroundImage ="url('assets/technology/technology-tablet.jpg')";
    document.getElementById("technologyVechile-mobile").style.display = "";
    document.getElementById("technologyVechile").style.display = "none";
    document.getElementById("technologyCapsule-mobile").style.display = "none";
    document.getElementById("technologySpaceport-mobile").style.display = "none";
  }
  else if (mediaQuery2.matches){
    document.body.style.backgroundImage ="url('assets/technology/technology-mobile.jpg')";
    document.getElementById("technologyVechile-mobile").style.display = "";
    document.getElementById("technologyVechile").style.display = "none";
    document.getElementById("technologyCapsule-mobile").style.display = "none";
    document.getElementById("technologySpaceport-mobile").style.display = "none";
  }
  else {
    document.body.style.backgroundImage ="url('assets/technology/technology.jpg')";
    document.getElementById("technologyVechile").style.display = "";
    document.getElementById("technologyVechile-mobile").style.display = "none";
    document.getElementById("technologyCapsule-mobile").style.display = "none";
    document.getElementById("technologySpaceport-mobile").style.display = "none";
  }




}
function technologyCapsule() {
  document.getElementById("technologyVechile").style.display = "none";

  document.getElementById("technologySpaceport").style.display = "none";
  document.getElementById("technologyVechile-mobile").style.display = "none";

  // Check if the media query is true
  if (mediaQuery.matches) {
  // Then trigger an alert

  document.getElementById("hr-top").style.display="none";
  document.body.style.backgroundImage ="url('assets/technology/technology-tablet.jpg')";

  document.getElementById("technologyCapsule").style.display = "none";

  document.getElementById("technologyVechile-mobile").style.display = "none";
  document.getElementById("technologyCapsule-mobile").style.display = "";
  document.getElementById("technologySpaceport-mobile").style.display = "none";
  }
  else if (mediaQuery2.matches){
    document.body.style.backgroundImage ="url('assets/technology/technology-mobile.jpg')";

   document.getElementById("technologyCapsule").style.display = "none";

    document.getElementById("technologyVechile-mobile").style.display = "none";
    document.getElementById("technologyCapsule-mobile").style.display = "";
    document.getElementById("technologySpaceport-mobile").style.display = "none";
  }
  else {
  document.body.style.backgroundImage ="url('assets/technology/technology.jpg')";

     document.getElementById("technologyCapsule").style.display = "";

    document.getElementById("technologyVechile-mobile").style.display = "none";
    document.getElementById("technologyCapsule-mobile").style.display = "none";
    document.getElementById("technologySpaceport-mobile").style.display = "none";
  }



}
function technologySpaceport() {
  document.getElementById("technologyVechile").style.display = "none";
  document.getElementById("technologyCapsule").style.display = "none";



  // Check if the media query is true
  if (mediaQuery.matches) {
  // Then trigger an alert

  document.getElementById("hr-top").style.display="none";
  document.body.style.backgroundImage ="url('assets/technology/technology-tablet.jpg')";

  document.getElementById("technologySpaceport").style.display = "none";

  document.getElementById("technologyVechile-mobile").style.display = "none";
  document.getElementById("technologyCapsule-mobile").style.display = "none";
  document.getElementById("technologySpaceport-mobile").style.display = "";
  }
  else if (mediaQuery2.matches){
    document.body.style.backgroundImage ="url('assets/technology/technology-mobile.jpg')";

  document.getElementById("technologySpaceport").style.display = "none";

    document.getElementById("technologyVechile-mobile").style.display = "none";
    document.getElementById("technologyCapsule-mobile").style.display = "none";
    document.getElementById("technologySpaceport-mobile").style.display = "";
  }
  else {
  document.body.style.backgroundImage ="url('assets/technology/technology.jpg')";

     document.getElementById("technologySpaceport").style.display = "";

    document.getElementById("technologyVechile-mobile").style.display = "none";
    document.getElementById("technologyCapsule-mobile").style.display = "none";
    document.getElementById("technologySpaceport-mobile").style.display = "none";
  }

}

 //  var x = window.matchMedia("(max-width: 700px)");
 // // function myFunction(x) {
 // if (x.matches) { // If media query matches
 //  document.body.style.backgroundColor = "blue";
 // }
  // else {
 // document.body.style.backgroundColor = "pink";
 // }



 // myFunction(x) // Call listener function at run time
 // x.addListener(myFunction) // Attach listener function on state changes
