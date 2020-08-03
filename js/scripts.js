$(document).ready(function () { //The ready() method is used to make a function available after the document is loaded. Whatever code you write inside the $(document ).ready() method will run once the page DOM is ready to execute JavaScript code.
    $("#design").click(function () {
        $("#hideDesign").toggle();
    })
    //will target the design so that it will show hidden content upon the click
    $("#development").click(function () {
        $("#hideDevelopment").toggle();
    })
    $("#productManagement").click(function () {
        $("#hideproductManagement").toggle();//hide contents
    })
    $('#mc-embedded-subscribe').click(function () {
        var name = document.getElementById("mce-NAME").value;//target an element with the id mce-NAME
        alert("Hey " + name + ". We have received your details thank you for reaching us!"); //will show an alert in top of screen
    });
    $(".card-1").hover(function(){
        $(this).animate({opacity:'1'});
        //will target card one and prompt an action so that when a mouse is hovered over it, the opacity will differ
    },
    function(){4
        $(this).animate({opacity:'0'});
        });    
        //prompt relates with the one above
})

.hide; {
display: none;
}