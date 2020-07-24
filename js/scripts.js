$(document).ready(function () {
    $("#design").click(function () {
        $("#hideDesign").toggle();
    })
    $("#development").click(function () {
        $("#hideDevelopment").toggle();
    })
    $("#productManagement").click(function () {
        $("#productManagementt").toggle();
    })
    $('#mc-embedded-subscribe').click(function () {
        var name = document.getElementById("mce-NAME").value;
        alert("Hey " + name + ". We have received your details thank you for reaching us!");
    });
    $(".card-1").hover(function(){
        $(this).animate({opacity:'1'});
    },
    function(){4
        $(this).animate({opacity:'0'});
        });    
})

.hide; {
display: none;
}