// Event
// Event Handler

// Inner HTML
const p3 = document.querySelector('.p3');
function ubahWarna(){
    p3.style.backgroundColor = 'lightblue';
}
// Inner Javascript
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnap2;
function ubahWarnap2(){
    p2.style.backgroundColor = 'lightblue';
}

// Add Event Listener
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksBaru = document.createTextNode('Item Baru');
    liBaru.appendChild(teksBaru);
    ul.appendChild(liBaru);
});