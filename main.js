$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $(`<li>${novaTarefa}</li>`);
        (novoItem).appendTo('ol');
        $(novoItem).fadeIn();
        $('#nome-tarefa').val('');
        
        $('li').click(function(){
            $(this).addClass('item-completado');
        });
    });
});