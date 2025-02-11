const displayElement = document.getElementById("display");
const submitElement = document.getElementById("submit");
const nameElement = document.getElementById("name");
const mailElement = document.getElementById("mail");
const phoneElement = document.getElementById("phone");
const messageElement = document.getElementById("message");
const informationElement = document.getElementById("information")


submitElement.addEventListener("click", function(event) {

    let text = nameElement.value;
    let mail = mailElement.value;
    let num = phoneElement.value;
    let mess = messageElement.value;

    if (text !== "" && mail !=="" && num !=="" && mess !=="") {
        displayElement.innerHTML = "Thank you! Your message has been submitted successfully.";
        informationElement.style.backgroundColor = "#009900";
    }
          
    if (text === ""){
        displayElement.innerHTML = "Please enter your full name!";
        informationElement.style.backgroundColor = "#CC0000"; 
    }

    else if (mail === ""){
        displayElement.innerHTML = "Please enter your email address!";
        informationElement.style.backgroundColor = "#CC0000"; 
    }

    else if (num ===""){
        displayElement.innerHTML = "Please enter your phone number!";
        informationElement.style.backgroundColor = "#CC0000"; 
    }

     else if (mess ===""){
        displayElement.innerHTML = "Please type your message!";
        informationElement.style.backgroundColor = "#CC0000"; 
    }
});
