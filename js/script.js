function init(){
  //add your javascript between these two lines of code
  function alertFunction(){
    var input = document.getElementById('entryinput').value;
	document.getElementById('textoutput').innerHTML = input;
    alert('Rabia Ahmed: ' + inputForm.value)
  }

  // This is the button
  var button = document.getElementById("entrybutton");
  button.addEventListener("click",updateText);

}
window.addEventListener('load', init);
