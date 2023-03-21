const bigSvg = '<svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>';

const smallSvg = '<svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>';

const replace = document.getElementById('svgReplace');
const mediaQuery = window.matchMedia('(max-width:376px)');

mediaQuery.addEventListener('change',handleSvg);

function handleSvg(e){
    if (e.matches) {
        replace.innerHTML = smallSvg;
        // console.log('small');
    } else {
        replace.innerHTML = bigSvg;
        // console.log('big');
    }
}
handleSvg(mediaQuery);

// code for quote generator

const button = document.getElementById('button');
const quote = document.getElementById('quote');
const adviceNo = document.getElementById('adviceNo');
// console.log(button,quote);

button.addEventListener('click',getData);

async function getData() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    showQuote(data);
}

function showQuote(data){
    const obj = data.slip;
    quote.textContent = obj.advice;
    adviceNo.textContent = ' #'+ obj.id ;
}

document.addEventListener(onload,getData());