var chosenRating = null;

$(document).ready(function(){
    
$(".ratingButton").click(function(){
    chosenRating = $(this).data("rating");
    $(".ratingButton").removeClass("selected clicked");
    $(this).addClass("selected clicked");
});

$("#submitButton").click(function(){
    if (chosenRating !== null){
       $(".rating-button-text button").text("You selected " + chosenRating + " out of 5")
       $(".rating-state").hide();
       $(".thank-you-state").show();
    }


})
})