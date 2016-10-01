function renderUrlButton(){
    var browserFrame = document.getElementById("browser")
    browserFrame.src = document.getElementById("txtUrl").value;
    console.log(browserFrame.src)
    return browserFrame.src
}

function renderUrlEnter(){
    var txt = document.getElementById("txtUrl");
    txt.addEventListener("keypress", function(event) {
      if (event.keyCode === 13)
        renderUrlButton()
    })
}

function modifyCount(val) {
  var qty = document.getElementById("count").value;
  var new_qty =  parseInt(qty,10) + val;

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById("count").value = new_qty;
    console.log(new_qty);
    return new_qty;
}


function tweetUrl() {
  return "https://twitter.com/intent/tweet?text=I%20found%20typos%20in%20this%20story%20&url=http%3A%2F%2F" + "www.washingtonpost.com" + "%2F&hashtags=typocountr"
}
console.log(tweetUrl())

//document.getElementById("tweet").href = tweetUrl()


// https://twitter.com/intent/tweet?text=I%20found%20typos%20in%20this%20story%20&url=http%3A%2F%2Fwww.washingtonpost.com%2F&hashtags=typocountr


// function tweetTypo () {
//   var iframe = document.getElementById("browser")
//   console.log(iframe.contentWindow.location.href);
// }


// function createTweetUrl () {
//   var count = document.getElementById("count").value;
//   var url = document.getElementById("txtUrl").value;
//   var tweetUrl = "https://twitter.com/intent/tweet?text=I%20found%20" + count + "%20in%20this%20story%20" + url + " &?hashtags=typocountr"
//}
