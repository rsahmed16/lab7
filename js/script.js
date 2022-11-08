function init(){
  function alertMe(){
    var input = document.getElementById('entryinput').value;
	document.getElementById('textoutput').innerHTML = input;
	alert('Rabia Sajjad Ahmed: ' + input);
  }
  
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', alertMe);
}
window.addEventListener('load', init);
