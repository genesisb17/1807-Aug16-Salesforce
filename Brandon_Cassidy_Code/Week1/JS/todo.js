window.onload = function(e)
{
    //alert('js works!');
    document.getElementById("addListItem").addEventListener("click",addListItem, true);
    console.log("onload")
    document.getElementById("removeListItem").addEventListener("click",removeListItem,true);
}
//var clicks = 0;
function addListItem(){
    console.log("addItem")
 //   console.log(clicks +" clicks!");
    let newItem = document.getElementById("readIn").value;
    if(newItem=="")
    return;
//    clicks +=1;
    let newInsert = document.createElement('li');
    let DatList = document.getElementById("DaList");
    newInsert.appendChild(document.createTextNode(newItem));
    DatList.appendChild(newInsert);

    return;
}