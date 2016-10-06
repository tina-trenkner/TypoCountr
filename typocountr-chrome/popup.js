document.addEventListener('DOMContentLoaded', function () {
  var buttonUp = document.getElementById('buttonUp')
  buttonUp.addEventListener('click', function () {
    modifyCount(1);
  })
})

document.addEventListener('DOMContentLoaded', function () {
  var buttonDown = document.getElementById('buttonDown')
  buttonDown.addEventListener('click', function () {
    modifyCount(-1);
  })
})

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

document.addEventListener('DOMContentLoaded', function() {
    var tweetBtn = document.getElementById('tweetBtn')
    tweetBtn.addEventListener('click', function() {
        chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function(tabs) {
            var tab = tabs[0];
            var txtUrl = (tab.url);
            var typoCount = modifyCount(0);
            var tweet = "https://twitter.com/intent/tweet?text=I%20found%20" + typoCount +
                "%20typos%20in%20this%20story&url=" + txtUrl + "%2F&hashtags=typocountr"
              var tweetOneTypo = "https://twitter.com/intent/tweet?text=I%20found%20a%20typo%20in%20this%20story&url=" + txtUrl + "%2F&hashtags=typocountr,"
            console.log(tweet)
            console.log(tweetOneTypo)
            var link = document.getElementById("tweetBtn");
            if (typoCount === 1) {
            link.setAttribute("href", tweetOneTypo)

            window.open(
              tweetOneTypo,
              '_blank'
            );
          } else {
            link.setAttribute("href", tweet)

            window.open(
              tweet,
              '_blank'
            );
          }
        })
    })
})
