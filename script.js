
let billAmount = document.getElementById("bill-amount");
let persons = document.getElementById("persons");
let splitBtn = document.getElementById("splitButton")
let splitList = document.getElementById("splitamount")

function splitBill(){
    event.preventDefault(); // prevents the form submission
    if(billAmount.value===""){
        alert("please enter bill amount");
        return;
    }
    var splitAmount = billAmount.value/parseInt(persons.value);
    var splitresult = document.getElementById("result")
    splitresult.textContent = splitAmount.toFixed(2)
    splitList.hidden = false;
}


splitBtn.addEventListener('click',splitBill)

