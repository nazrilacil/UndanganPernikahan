const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('n') || '';
const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/i,';
const namaTamu = document.querySelector('.hero h4 span');

namaTamu.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ',');
document.getElementById('nama').value = nama;