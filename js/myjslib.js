//practical 4

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
// practical 9

function getSelectValue(formname,selectname){
  var theMenu = document[formname][selectname];
  console.log(theMenu);
  var selecteditem = theMenu.selectedIndex;
  console.log(selecteditem);
  return theMenu.options[selecteditem].value;
}

function checkScore() {
  //var answers = ["Extensible HyperText Markup Language", "&ltp&gt&lt/p&gt", "&ltbr /&gt"];
  var answers = [3,2,2]
  var points = 0;
  console.log(getSelectValue("onlineQuiz","0"));
  console.log(getSelectValue("onlineQuiz", "1"));
  console.log(getSelectValue("onlineQuiz","2"));

  if (getSelectValue("onlineQuiz","q1") == answers[0])
    points = +points + +1;
  if (getSelectValue("onlineQuiz","q2") == answers[1])
      points = +points + +1;
  if (getSelectValue("onlineQuiz","q3") == answers[2])
    points = +points + +1;

  document.getElementById("scoreDisplay").value = points;
  if (points == 3)
    document.getElementById("task1").innerHTML = "Well Done";
  else
    document.getElementById("task1").innerHTML = "Keep Trying";

}
