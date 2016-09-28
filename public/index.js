function renderUrl(){
      var browserFrame = document.getElementById("browser");
      browserFrame.src= document.getElementById("txtUrl").value;
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



// var url = document.getElementById("url")
// var urlRender = document.getElementById("urlRender")

// function renderUrl() = {
//   var url = document.getElementById("url").value;
//   document.getElementById("urlRender").src = url;
// }

//Take the url in id
//When the button is clicked, put the url into the iFrame code in urlRender
