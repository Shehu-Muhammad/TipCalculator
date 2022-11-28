const MINUS_TIP = () => {
    let minus = document.getElementById("subtract-tip")
    let tip = document.getElementById("tip")
    minus.addEventListener("click", (e)=> {
        e.preventDefault();
        tip.value - 1 == -1 ? 0 : tip.value -= 1
    })
}

const ADD_TIP = () => {
    let add = document.getElementById("add-tip")
    let tip = document.getElementById("tip")
    add.addEventListener("click", (e)=> {
        e.preventDefault();
        tipValue = parseInt(tip.value) 
        tip.value = tipValue + 1
    })
}

ADD_TIP();
MINUS_TIP();