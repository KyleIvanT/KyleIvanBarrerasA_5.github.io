
//Kyle Barreras
function biggerFunction()
{
   // alert("hello world");
    var textBox = document.getElementById("text-box");
    textBox.style.fontSize = "24pt";
}
function RadioChecker() {
  var textBox = document.getElementById("text-box");
  var fancyRadio = document.getElementById("fancy-radio");
  var boringRadio = document.getElementById("boring-radio");

  if (fancyRadio.checked) {
    boldFunction(textBox);
    boringRadio.checked = false; // Uncheck BoringBetty
  } else if (boringRadio.checked) {
    revertFunction(textBox);
    fancyRadio.checked = false; // Uncheck FancyShmancy
  }
}
function boldFunction(element)
{
    //alert("hello world");
   
    element.style.fontWeight = "bold";
    element.style.color = "blue";
    element.style.textDecoration = "underline";
}

function revertFunction(element)
{
    element.style.fontWeight = "normal";
    element.style.color = "black";
    element.style.textDecoration = "none";
}

function mooFunction()
 {
    var textBox = document.getElementById('text-box').value;
    var newSentences = textBox.split(". ");
  
    for (var i = 0; i < newSentences.length; i++) {
      var sentence = newSentences[i];
      var words = sentence.split(" ");
      if (words.length > 1) {
        words[words.length - 1] += "-Moo";
        newSentences[i] = words.join(" ");
      }
    }
  
    var UpdatedText = newSentences.join(". ");
  
   
    document.getElementById('text-box').value = UpdatedText;
  }
  

