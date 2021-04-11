$(document).ready(function(){

    /* variabili di accesso */
    var withDrop = $(".with-dropMenu a");
    var hiddenObj = $(".dropMenu");
    

    withDrop.click( function(){
        showDrop( $(this) , hiddenObj)
    } )
});

/* FUNCTION */
function showDrop( drop,hidden ){
    hidden.not( $(drop).next(hidden) ).hide();

    $(drop).next(hidden).toggle();
}