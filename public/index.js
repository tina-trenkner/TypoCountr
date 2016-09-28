function renderUrlButton(){
      var browserFrame = document.getElementById("browser");
      browserFrame.src= document.getElementById("txtUrl").value;
}

function renderUrlEnter(){
    var go = document.getElementById("buttonurl");
    var txt = document.getElementById("txtUrl");

    txt.addEventListener("keypress", function(event) {
      event.preventDefault();
      if (event.keyCode == 13)
        go.click();
    })
}

function modifyCount(val) {
    var qty = document.getElementById("count").value;
    var new_qty =  parseInt(qty,10) + val;

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById("count").value = new_qty;
    return new_qty;
}
