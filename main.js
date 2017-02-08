var userInput = document.querySelector('#userInput');
var list = document.querySelector('#todoList');

userInput.addEventListener('keypress', e=>{
  if(e.keyCode === 13){
    if(userInput.value == '') return;
    list.innerHTML += "<li class='item'><span>" + userInput.value + "</span></li>";
    if(userInput.value == '-clear') {list.innerHTML = ''};

    userInput.value = '';

    var listItem = document.querySelectorAll('.item');
    for(var i=0;i<listItem.length;i++){
      listItem[i].addEventListener('click', function(){
    this.classList.toggle('done');
      
      });
    }
  }
});
