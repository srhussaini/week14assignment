"use strict";

function SaveItem(){
  let name = document.forms.ShoppingList.name.value;
  let data = document.forms.ShoppingList.data.value;
  localStorage.setItem(name, data);
  ShowAll();
}
function ModifyItem(){
  let name = document.forms.ShoppingList.name.value;
  document.forms.ShoppingList.data.value = localStorage.getItem(name);
  localStorage.getItem(name);
  ShowAll();
}
function RemoveItem(){
  let name = document.forms.ShoppingList.name.value;
  document.forms.ShoppingList.data.value = localStorage.removeItem(name);
  localStorage.removeItem(name);
  ShowAll();
}
function ClearAll(){
  localStorage.clear();
  ShowAll();

}
function ShowAll(){
  if (CheckBrowser()){
    let key = "";
    let list = "";
    let i = 0;
    for (i=0; i<=localStorage.length - 1; i++){
      key = localStorage.key(i);
      list += "<tr><td>" + key + "</td>\n<td>" + localStorage.getItem(key) + "</td></tr>\n";
    }
    document.getElementById('list').innerHTML = list;
  }else{
    alert("Cannot store shopping list. Your browser doea not suppoert local storage")
  }
}






function CheckBrowser() {
  if ('localStorage' in window && window ['localStorage'] !==null){
  //we can use local storage
  console.log ('local storage works');
  return true;
}else {
  return false;
}
}