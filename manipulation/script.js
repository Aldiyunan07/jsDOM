// Manipulation

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em> Aldi Yunan Anwari </em> '; // Edit Inner HTML

// const judul = document.querySelector('#judul');
// judul.setAttribute('name','Aldi Yunan Anwari'); // Menambahkan Attribute
// judul.getAttribute('name'); // Get Attribute name
// judul.removeAttribute('name') // Remove Attribute name

// Class List
const p2 = document.querySelector('.p2');
p2.classList.add('label'); // Menambahkan class terbaru
p2.classList.remove('label'); // Menghapus class tertentu jika ada
p2.classList.toggle('label'); // Delete or Create
p2.classList.item(2); // Get class by item
p2.classList.contains('label'); // Cek ketersediaan class
p2.classList.replace('label','labels'); // Cek ketersediaan class

// Manipulasi Node
const pBaru = document.createElement('p'); // Membuat Elemen / tag Baru
const teksBaru = document.createTextNode('Paragraf Baru'); // Membuat teks baru
pBaru.appendChild(teksBaru); // Menambahkan teks pada tag baru
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLi = document.createTextNode('Item Baru');
liBaru.appendChild(teksLi);
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2); // Insert Element Sebelum Elemen

// const link = document.getElementsByTagName('a');
// sectionA.removeChild(link); // Menghapus Element 

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const teksH2 = document.createTextNode('Judul Baru!');
h2Baru.appendChild(teksH2);
sectionB.replaceChild(h2Baru,p4);