// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
var search = $("#search-term").val();
var randomNum = Math.floor(Math.random() * 10);
$.ajax({
    url: "https://api.giphy.com/v1/gifs/search?q=" + search + "&rating=pg&api_key=dc6zaTOxFJmzC",
    method: "GET",
    success: function(response) {
        $(".container1").html("<img src=" + response.data[randomNum].images.original.url + ">");
        $(".container1").append("<br>"+"<a target=_blank href=" + response.data[randomNum].images.original.url + ">Here's the link!</a>");
        
    }
}
    
    );

});

