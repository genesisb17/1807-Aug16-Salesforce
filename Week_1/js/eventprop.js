window.onload = function(e) {
    //addEventLister(eventType, function, useCapture)
    /*bubbling vs capturing
    capturing does last alerts first
    */
    document.getElementById("inner").addEventListener("click", function() {
        alert("INNER");
        event.stopPropagation();
    }, false);
    document.getElementById("middle").addEventListener("click", function() {
        alert("MIDDLE");
        event.stopPropagation();
    }, false);
    document.getElementById("outer").addEventListener("click", function() {
        alert("OUTER");
        event.stopPropagation();
    }, false);
}
