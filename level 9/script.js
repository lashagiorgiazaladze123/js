const myCheckbox = document.getElementById('myCheckbox');
const visaBtn = document.getElementById('visaBtn');
const MasterCard = document.getElementById('MasterCard');
const PayPal = document.getElementById('PayPal');
const mySubmit = document.getElementById('mySubmit');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = 'you are subscribed!';
    }
        else{
            subResult.textContent = 'you are not subscribed';
        }

        if (visaBtn.checked){
            paymentResult.textContent = " you are paying with visa"
        }
        else         if (MasterCard.checked){
            paymentResult.textContent = " you are paying with MasterCard"
        }
    else        if (PayPal.checked){
        paymentResult.textContent = " you are paying with PayPal"
    }
    else{
        paymentResult.textContent = 'you must pick payment type'
    }
}