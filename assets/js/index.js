$('input[type="text"]').on('keypress', function(e){
  if (e.which === 13) { addTodo($(this).val()); }
});

$('ul').on('click', '.item', function(){
  $(this).toggleClass("done");
});

$('ul').on('click', 'span', function(e){
  $(this).parent().fadeOut('fast', function(){
    $(this).remove();
  });
  e.stopPropagation();
});

$('h1').on('dblclick', function(){
  $('input').slideToggle('fast');
});

function addTodo(todoItem){
  if(todoItem === '') return;
  $('ul').append('<li class="item"><span>🗙</span>' + todoItem + '</li>');
  $('input[type="text"]').val('');
}