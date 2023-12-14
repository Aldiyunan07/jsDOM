// DOM Selection

// Part 1 
// document.getElementById
const judul = document.getElementById('judul');
judul.style.color = 'red'; // Restyle css
judul.style.backgroundColor = 'aqua'; // Restyle css
judul.innerHTML = 'Update inner HTML'; // Update inner HTML

// document.getElementByTagName
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'green'; // Restyle css HTML Collection
}
p[2].style.backgroundColor = 'yellow';

// document.getElementsByClassName('p1');
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Perubahan dari javascript';

// Part 2
// document.querySelector
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'green';

// document.querySelectorAll
// Node List
const p = document.querySelectorAll('p');
p[0].style.backgroundColor = 'lightblue';

// Tips & Trick
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'lightBlue';