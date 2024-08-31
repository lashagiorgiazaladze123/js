const btn = document.getElementById("mySubmit");
const myP = document.getElementById("myP");
const myInput = document.getElementById("myInput");


btn.onclick = function() {
    
    const inputValue = myInput.value;

    
    const atSignIndex = inputValue.indexOf("@");
    const username = atSignIndex !== -1 ? inputValue.slice(0, atSignIndex) : 'Invalid email address';
    
    myP.textContent = `Username: ${username}`;
};