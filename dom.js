//BYCLASSNAME
var items = document.getElementsByClassName('list-group-item');

for(var i = 0; i < items.length; i++){
    items[i].style.fontWeight = 'bold';
}




//BYTAGNAME
var li = document.getElementsByTagName('li');
li[4].style.backgroundColor = 'yellow';