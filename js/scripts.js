var list = document.getElementById("list");
var add = document.getElementById("addElem")

function addElem() {
  var lis = list.getElementsByTagName('li');
  var element = document.createElement('li');
    
  element.innerText = "item" + lis.length;
  list.appendChild(element);
}
add.addEventListener("click", addElem)