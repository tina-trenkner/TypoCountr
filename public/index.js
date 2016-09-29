function renderUrlButton(){
      var browserFrame = document.getElementById("browser");
      browserFrame.src= document.getElementById("txtUrl").value;
}

function renderUrlEnter(){
    var txt = document.getElementById("txtUrl");
    txt.addEventListener("keypress", function(event) {
      if (event.keyCode === 13)
        renderUrlButton();
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

// function tweetTypo() {
//   var count = document.getElementById("count").value;
//   var url = document.getElementById("txtUrl").value;
//   var tweetButton = document.getElementById("tweetButton")
//
//   tweetButton.addEventListern("click", function(event) {
//
//   })
  //Take the number from the counter
  //The the url from the text input field
  //Throw those two values into a prepopulated tweet: "I found TK typos in this story [link] #typocountr"
// }
