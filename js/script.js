function init(){
  //add your javascript between these two lines of code
  function alertFunction(){
    input = document.getElementById('entryinput')
    alert('Rabia Ahmed: ' + inputForm.value)
    document.getElementById('textoutput').innerHTML = input.value;
  }

  // This is the button
  var button = document.getElementById("entrybutton");
  button.addEventListener("click",updateText);

}
window.addEventListener('load', init);
