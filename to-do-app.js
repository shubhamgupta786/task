var tasks = document.getElementById('search_field');
var btnAdd = document.getElementById('btn');
var list = document.getElementById('lists');
var boxValue;
var btnUpdate = document.getElementById('btnUpdate');
var btnRemove = document.getElementById('btnRemove');

tasks.addEventListener('change', function(e){
    boxValue = e.target.value;
})

function createText(){
        var newListElement = document.createElement('li');
        var newDelete = document.createElement('i');
        var textNode = document.createTextNode(boxValue)
        newListElement.appendChild(textNode);
        newListElement.id="item";
        newDelete.className="fa fa-trash";
        newListElement.appendChild(newDelete);

        return newListElement;
}

function addItems(){

    if(boxValue !== undefined && boxValue !== null && boxValue !== '')
    {
        var newListElement = createText();

        list.appendChild(newListElement);

        tasks.value = '';
        boxValue = '';
    }
    
    else{
        alert('Please Enter A Valid To-Do Value');
    }
}

tasks.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        addItems();
    }
})

btnAdd.addEventListener('click', addItems);

btnUpdate.addEventListener('click', function(){

    if(boxValue !== undefined && boxValue !== null && boxValue !== '')
    {
    var firstElement = list.firstElementChild;
    var newListElement = createText();
    list.replaceChild(newListElement, firstElement);
    tasks.value = '';
    boxValue = '';
    }
    else{
        alert('First Enter an Updated Value!')
    }
})

btnRemove.addEventListener('click', function(){
    
    var firstElement = list.firstElementChild;
    if(firstElement !== undefined && firstElement !== null && firstElement !== '')
    {
        list.removeChild(firstElement);
    }
    else{
        alert('No Tasks are Left!!')
    }
    
})

function removeEvent(e) {
    if(e.target.classList.contains('fa-trash')) {
        list.removeChild(e.target.parentElement);
        list.removeChild(list);
    }
  }

list.addEventListener('click', removeEvent);