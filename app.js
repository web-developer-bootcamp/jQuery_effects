$("button").on("click", function () {
    $("div").slideToggle(800, function(){
        console.log("slide completed")
    });
});

//fadeOut fadeIn fadeToggle