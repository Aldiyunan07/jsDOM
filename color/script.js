const body = document.querySelector('body');
const button = document.getElementById('button');
// button.addEventListener('click', function(){
//     body.style.backgroundColor = 'lightblue';    
// });

button.onclick = function(){
    body.classList.toggle('lightblue');
}

// button.onclick = function(){
//     document.body.style.backgroundColor = 'lightblue';
// };

const button2 = document.createElement('button');
const teksB2  = document.createTextNode('Acak Warna');
button2.appendChild(teksB2);
button2.setAttribute('type', 'button');
button.after(button2);

button2.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    body.style.backgroundColor = 'rgb('+ r +','+ g + ',' + b + ')';
})

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

document.body.addEventListener('mousemove', function(event){
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos + ',100)';
});