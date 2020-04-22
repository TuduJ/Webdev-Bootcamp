
// Check of specific todo by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();

});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // console.log($(this).val());
        var todoText = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>");
        $(this).val(null);
    }
});

$(".fa-plus-square").click(function(){
    $("input[type='text']").fadeToggle();
});
