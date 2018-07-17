window.onload = function(e) {
    document.getElementById("add").addEventListener("click", addToList, true);
    document.getElementById("remove").addEventListener("click", removeFromList, true);
}

function addToList() {
    let newEntry = document.getElementById("newEntry").value;
    if (newEntry == "") return;
    let list = document.getElementById("list");
    let entry = document.createElement("li");
    entry.setAttribute("id", "entry");
    entry.appendChild(document.createTextNode(newEntry));
    list.appendChild(entry);
    document.getElementById("newEntry").value = "";
}

function removeFromList() {
    let oldEntry = document.getElementById("entry");
    oldEntry.parentNode.removeChild(oldEntry);
}