window.onload = function(e){
    document.getElementById("addItem").addEventListener("click",addItem, true);
    document.getElementById("removeFirst").addEventListener("click", removeFirst, true);
    document.getElementById("removeLast").addEventListener("click", removeLast, true);
    document.getElementById("removeAll").addEventListener("click", removeAll, true);

}

window.onkeypress = function(e){
    //only react on enter
    if(event.keyCode == 13 ){
        //check that textbox has focus
        if(this.document.getElementById("item") === this.document.activeElement){
            addItem();
        }
    }
}

function addItem(){
    let str = document.getElementById("item").value; //grab value from text box
    if(str === ""){ //test for empty string values
        return;
    }
    let listItem = document.createElement("li"); //create <li> node
    let text = document.createTextNode(str); //create text node
    listItem.appendChild(text); //append text node to <li> node
    document.getElementById("list").appendChild(listItem); //append the <li> node to the <ul> node in the html

    document.getElementById("item").value = ""; //clear value from text box after adding to list
}

/**Remove the first item in the list
 * 
 */
function removeFirst(){
    let ul = document.getElementById("list");
    ul.removeChild(ul.firstChild);
    
}
/**Remove the last item in the list
 * 
 */
function removeLast(){
    let n = document.getElementById("list").childElementCount;
    let ul = document.getElementById("list");
    document.getElementById("list").removeChild(ul.lastChild);
}

/**Remove all items in the list
 * 
 */
function removeAll(){
    let n = document.getElementById("list").childElementCount;
    let ul = document.getElementById("list");
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }

    
}