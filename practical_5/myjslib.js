function DisplayTex(inputtext) {
  window.document.write(inputtext);
}
var universities = ["Ulster University", "Queen's University"];
var campus = ["Belfast","Coleraine","Jordanstown","Magee"];
var course = [ "Software Engineering", "Computer Science", "Interactive Multimedia Design", "Information Communication Technology"];

function WelcomeTex() {
  name= document.getElementById("name").value;
  window.document.write(name + ", Welcome to JavaScript homepage!");
}

function newWelcomeTex() {
  name= document.getElementById("name").value;
  uni = document.getElementById("university");
  uni = uni.options[uni.selectedIndex].text;
  campus = document.getElementById("campus");
  campus =campus.options[campus.selectedIndex].text;
  course = document.getElementById("course");
  course = course.options[course.selectedIndex].text;
  window.document.write(name + " from " + uni + " studying " + course + " at " + campus + ", Welcome to JavaScript homepage!");
}
//
