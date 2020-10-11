var lan = ["1.Python","2.C++","3.C","4.R"];
var text = "";
var i;
for (i = 0; i < lan.length; i++) {
  text += lan[i] + "<br>";
}
document.getElementById("lann").innerHTML = text;

var int = ["1.Data Analysis","2.Machine Learning","3.Quantitative Finance","4.Probability and Statistics","5.Linear Algebra"];
var text = "";
var i;
for (i = 0; i < int.length; i++) {
  text += int[i] + "<br>";
}
document.getElementById("intt").innerHTML = text;
