const textEle = document.getElementById('text');
const centerEle = document.querySelector('.center');
const correctTextEle = document.querySelector('.correct');


textEle.addEventListener('input', e => {
    console.log(e.target.value);
    const value = e.target.value;
    if (verifyPalindromo(value)) {
        centerEle.style.border = '2px solid lawngreen';
        centerEle.style.boxShadow = '1px 1px 30px rgba(124, 252, 0, 0.7)';
        correctTextEle.style.visibility = 'visible';
        correctTextEle.style.opacity = '1';
    } else {
        centerEle.style.border = '2px solid red';
        centerEle.style.boxShadow = '1px 1px 30px rgba(255, 0, 0, 0.7)';
        correctTextEle.style.visibility = 'hidden';
        correctTextEle.style.opacity = '0';
    }
})

function verifyPalindromo(value) {
    const mei = value.length;
    let traz = value.length - 1;
    console.log(traz)
    for (let i = 0; i < mei; i++) {
        if (value.charAt(i) !== value.charAt(traz)) {
            console.log(value[i], value[traz]);
            return false;
        }
        traz--;
    }
    return true;
}