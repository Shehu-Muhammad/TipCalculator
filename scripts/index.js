const GET_SPLIT = () => {
    let split = document.getElementById("split");
    return split;
}

const GET_TIP = () => {
    let tip = document.getElementById("tip");
    return tip;
}

const MINUS_TIP = () => {
    let minus = document.getElementById("subtract-tip");
    let tip = GET_TIP();
    minus.addEventListener("click", (e)=> {
        e.preventDefault();
        tip.value - 1 == -1 ? 0 : tip.value -= 1;
    })
}

const ADD_TIP = () => {
    let add = document.getElementById("add-tip");
    let tip = GET_TIP();
    add.addEventListener("click", (e)=> {
        e.preventDefault();
        tipValue = parseInt(tip.value);
        tip.value = tipValue + 1;
    })
}

const MINUS_SPLIT = () => {
    let minus = document.getElementById("subtract-split");
    let split = GET_SPLIT();
    minus.addEventListener("click", (e)=> {
        e.preventDefault();
        split.value - 1 == -1 ? 0 : split.value -= 1;
    })
}

const ADD_SPLIT = () => {
    let add = document.getElementById("add-split");
    let split = GET_SPLIT();
    add.addEventListener("click", (e)=> {
        e.preventDefault();
        splitValue = parseInt(split.value); 
        split.value = splitValue + 1;
    })
}

MINUS_SPLIT();
ADD_SPLIT();
ADD_TIP();
MINUS_TIP();

const GET_AMOUNT = () => {
    let amount = document.getElementById("amount");
    return amount;
}

const ROUND_UP = () => {
    let roundUp = document.getElementById("roundUp");
    return roundUp;
}

const CALCULATE_TIP = (tip) => {
    let amount = GET_AMOUNT().value;
    let split = GET_SPLIT().value;
    let total = ((parseFloat(amount) * (parseFloat(tip)/100 + 1)) / parseInt(split)).toFixed(2);
    
    let roundUp = ROUND_UP().checked;
    
    if(roundUp) {
        total = Math.ceil(total).toFixed(2);
    }
    
    return total;
}

const CALCULATE_TOTAL = () => {
    let fifteenPercent = CALCULATE_TIP(15)
    let twentyPercent = CALCULATE_TIP(20)
    let twentyFivePercent = CALCULATE_TIP(25)
    let tip = document.getElementById("tip").value
    let split = document.getElementById("split").value
    
    let fifteen = document.getElementById("fifteen-percent-tip")
    let twenty = document.getElementById("twenty-percent-tip")
    let twentyFive = document.getElementById("twenty-five-percent-tip")
    let custom = document.getElementById("custom-tip")
    
    fifteen.innerHTML = fifteenPercent
    twenty.innerHTML = twentyPercent
    twentyFive.innerHTML = twentyFivePercent
    custom.innerHTML = CALCULATE_TIP(parseFloat(tip))
    
    document.getElementById("tip-split").innerHTML = split
    document.getElementById("result").style.display = "block";
    
}

const CALCULATE_BUTTON = () => {
    let calculateButton = document.getElementById("calculate")
    
    calculateButton.addEventListener("click", (e)=>{
        e.preventDefault()
        CALCULATE_TOTAL();
    })
}

CALCULATE_BUTTON();

const CLEAR_BUTTON = () => {
    let clear = document.getElementById("clear")
    clear.addEventListener("click", (e)=> {
        e.preventDefault()
        let amount = document.getElementById("amount")
        let tip = document.getElementById("tip")
        let split = document.getElementById("split")
        let result = document.getElementById("result")
        amount.value = amount.value * 0
        tip.value = tip.value * 0
        split.value = split.value * 0
        result.style.display = "none"
    })
}

CLEAR_BUTTON();