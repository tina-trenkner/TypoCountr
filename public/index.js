
//
// var url = document.getElementById("url")
// var urlRender = document.getElementById("urlRender")

// function renderUrl() = {
//   var url = document.getElementById("url").value;
//   document.getElementById("urlRender").src = url;
// }

//Take the url in id
//When the button is clicked, put the url into the iFrame code in urlRender


// function myFunction() {
//     var x = document.getElementById("myURL").value;
//     document.getElementById("demo").innerHTML = x;
// }


function renderUrl(){
    $('#urlRender').attr('src', $('#url').val());
}
