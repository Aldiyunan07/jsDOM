// DOM Traversal
// const close = document.querySelectorAll('.close');
// const cards = document.querySelectorAll('.card');

// close.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });

// cards.forEach(function(card){
//     card.addEventListener('click',function(el){
//         alert('ok');
//     })
// });

const container = document.querySelectorAll('.container');
container.addEventListener(function(e){
    if(e.target.className == 'close'){
        e.taret.parentElement.style.display = 'none';
        e.preventDefault();
    }
});