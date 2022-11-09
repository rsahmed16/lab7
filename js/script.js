function init() {
  //add your javascript between these two lines of code
  function alertFunction() {
    var input = document.getElementById('entryinput').value;
	document.getElementById('textoutput').innerHTML = input;
	alert('Rabia Sajjad Ahmed: ' + input);
  }
  // This will add the button
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', alertFunction);
}
window.addEventListener('load', init);
