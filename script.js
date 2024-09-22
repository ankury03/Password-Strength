const pass = document.querySelector("#password");
const message = document.querySelector("#message");
const str = document.querySelector("#Strength");

pass.addEventListener("input" , () => {
    if(pass.value.length > 0){
        message.style.display = "block";
    }else{
        message.style.display = "none";
    }

    if(pass.value.length < 4){
        str.innerHTML = "weak!"
        str.style.color = "red";
        pass.style.borderColor = "red"
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        str.innerHTML = "medium!"
        str.style.color = "yellow";
        pass.style.borderColor = "yellow"
    }
    else if(pass.value.length >= 8){
        str.innerHTML = "strong!"
        str.style.color = "limegreen";
        pass.style.borderColor = "limegreen"
    }
})

