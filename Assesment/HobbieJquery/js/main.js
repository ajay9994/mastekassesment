$(document).ready(function(){
    const root = $("#root");
    root.append("<ul id='list'></ul>");
    $('#addItem').click(function(){

        const item = $("#item").val();
        $('#list').append("<li>"+item+"</li>");
        $("#item").val('');
        
    })
   
})