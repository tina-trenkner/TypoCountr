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

// function tweetTypo () {
//   var iframe = document.getElementById("browser")
//   console.log(iframe.contentWindow.location.href);
// }

// function tweetTypo() {
//   var count = document.getElementById("count").value;
//   var url = document.getElementById("txtUrl").value;
//   var tweetButton = document.getElementById("tweetButton")
//
//   tweetButton.addEventListener("click", function(event) {
//      Bring up Twitter window
//      Make sure that window is prepopulated with count and link
//   })

  //Throw those two values into a prepopulated tweet: "I found TK typos in this story [link] #typocountr"
// }
//
// 'https://twitter.com/intent/tweet?text=I%20found' + count + ''%20typos%20in%20this%20story%20' + url + '?hashtags=typocountr'
