$(document).ready(function(){
    // on click on the what we do pictures
    $('#design_icon').click(function(){
        $('#design_icon_desc').show();
        $('#design_icon').hide();
    });
    $('#dev_icon').click(function(){
        $('#dev_icon_desc').show();
        $('#dev_icon').hide();
    });
    $('#product_icon').click(function(){
        $('#product_icon_desc').show();
        $('#product_icon').hide();
    });


    // on click on the what we do descriptions
    $('#design_icon_desc').click(function(){
        $('#design_icon_desc').hide();
        $('#design_icon').show();
    });
    $('#dev_icon_desc').click(function(){
        $('#dev_icon_desc').hide();
        $('#dev_icon').show();
    });
    $('#product_icon_desc').click(function(){
        $('#product_icon_desc').hide();
        $('#product_icon').show();
    });
});