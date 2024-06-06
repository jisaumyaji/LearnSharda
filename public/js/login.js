const handleClick = require('./firebase')

const submit = document.getElementById("login-bt");

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    handleClick();
})

