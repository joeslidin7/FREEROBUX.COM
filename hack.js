const button = document.getElementById("initiatehack");
const amount = document.getElementById("amount");
const username = document.getElementById("username");
const credit_info = document.getElementById("info");
const announcer = document.getElementById("announcer");

button.addEventListener('click', function(){

    if (credit_info.value === ""){
        announcer.textContent = "ERROR: PLEASE INSERT MOMMIES CREDIT CARD INFO";
        announcer.classList.add("error");
    
    }else if (username.value === ""){
        announcer.textContent = "ERROR: PLEASE INSERT YOUR ROBLOX USERNAME";
        announcer.classList.add("error");
    }else{
        if (amount.value === ""){
            amount.value = 0;
        }
        announcer.textContent = amount.value + " robux have been added to " + username.value + "'s account";
        announcer.classList.remove("error");
    }

});