const billAmount = document.querySelector("#bill-amt");

const cashGiven = document.querySelector("#cash-given")

//const nextBtn = document.querySelector("#next-btn")

const checkBtn = document.querySelector("#check-btn")

const errorMsg = document.querySelector("#error-msg")

const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000, 500, 100, 20 ,10 ,5 ,1];

checkBtn.addEventListener("click", function validateBillAndCashAmount(){
   hideError();
    let billAmountVal = Number(billAmount.value)
    let cashGivenVal = Number(cashGiven.value)

    if(billAmountVal > 0){
        if(cashGivenVal >= billAmountVal){
            const amountToBeReturn = cashGivenVal - billAmountVal;
            calculateNoOfNotes(amountToBeReturn);
        }
        else{
            showError("Cash Should be greater Than bill Amount")
        }
    }
    else{
        showError("Invalid Bill Amount")
    }
})


const calculateNoOfNotes=(amountToBeReturn)=>{
    for(let i=0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturn / availableNotes[i]);
        amountToBeReturn %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

const hideError=()=>{
    errorMsg.style.display = "none";
}

const showError=(message)=>{
        errorMsg.style.display = "block";
        errorMsg.innerText = message;
}
