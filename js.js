//Strike checklist text when selected
function toggle(source) {
  checkboxes = document.getElementsByName('check');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}
//Hamburger menu dropdown
function hamburger_menu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//Create variable with selected checklist name

// json data loading (promise function)
  function getData(){
    fetch('data.json')
    .then(res => res.json() )
    .then(data => getChecklists(data))
  }
  //Function what to do with json data

  function getChecklists(data){
    //Take top checklist names and convert to array
    var checklistNames = Object.keys(data);
  //Select hamburger html element to insert new elements there
    var hamburgerDiv = document.getElementById("myLinks");
    //Loop to get array names and insert them in hamburgerDiv
    for (let i=0;i<checklistNames.length;i++) {
      const a = document.createElement('a');
      const name = document.createElement('span');
      name.textContent = checklistNames[i];
      a.appendChild(name);
      a.setAttribute('onclick', 'selected(this.textContent)')
      hamburgerDiv.appendChild(a);
      }
  }
getData();


var selectedCL='';
function selected(text){
  selectedCL = text
  const myNode = document.getElementById("checklist");
  myNode.innerHTML = '';
  fetch('data.json')
  .then(res => res.json() )
  .then(data => getCL(data,text))


}

  function getCL(data,CLText){
    //console.log(CLText)
       //Loop to assign checklists based on selectedCL variable
      var liDiv = document.getElementById("checklist")
      document.querySelector("h2").innerHTML = CLText;
      var  arrayCL = data[CLText]
      for (let i=0;i<arrayCL.length;i++) {
        const input = document.createElement('input');
        const name = document.createElement('label');
        const br = document.createElement("br");
        name.textContent = arrayCL[i];
        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', 'check');
        input.setAttribute('value', 'bar' + i)
        liDiv.appendChild(input);
        liDiv.appendChild(name)
        liDiv.appendChild(br)
        }

}