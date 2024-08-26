for (i=0; i<11; i++) {
  let numType = "";
  if (i % 2 == 0) {
    numType = "even";
  }
  else {
    numType = "odd";
  }
  document.write("Number " + i + " is " + numType + ". <br> <br>");
}

var myNum = prompt("Enter a number betweeen 5 and 20");
var i = 0
do {
  let numType = "";
  if (i % 2 == 0) {
    numType = "even";
  }
  else {
    numType = "odd";
  }
  document.write("Number " + i + " is " + numType + ". <br> <br>");
  i = i + 1;
}
while (i <= myNum);

const subject = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

document.write("The available subjects are ");

subject.forEach(subFunction);

function subFunction(iValue, index) {
  document.write(iValue + ", ");
}
