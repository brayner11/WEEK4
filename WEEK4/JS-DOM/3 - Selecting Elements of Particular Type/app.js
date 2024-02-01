const listItems = document.querySelector('.list-parent').children;
for(let i = 0;i < listItems.length; i++) {
    if (1 % 2 === 0) {
        listItems[i].style.color = 'lightgreen';
    }
}