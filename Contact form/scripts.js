function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.length < 6) {
        text = "Venligst indtast fulde navn";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 5) {
        text = "Venligst indtast emne";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 8) {
        text = "Venligst indtast mobilnummer";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Venligst indtast korrekt email";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 140) {
        text = "Din besked skal være længere end 140 tegn, husk de informationer vi skal bruge";
        error_message.innerHTML = text;
        return false;
    }
    if (message.indexOf("motivation") == -1) {
        text = "Skriv venligst noget omkring din motivation for at arbejde som frivillig";
        error_message.innerHTML = text;
        return false;
    }
    if (message.indexOf("erfaring") == -1) {
        text = "Skriv venligst noget omkring din erfaring";
        error_message.innerHTML = text;
        return false;
    }
    if (message.indexOf("kompetencer") == -1) {
        text = "Skriv venligst noget omkring din/dine kompetencer indenfor området";
        error_message.innerHTML = text;
        return false;
    }
    if (message.indexOf("kendskab") == -1) {
        text = "Skriv venligst noget omkring din kendskab til psykiske sygdomme";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}

var bannerStatus = 1;
var bannerTimer = 5000;

window.onload = function () {
    bannerloop();
}

var startBanner = setInterval(function () {
    bannerloop();
}, bannerTimer);

function bannerloop() {
    if (bannerStatus === 1) {
        setTimeout(function () {
            document.getElementById("imgban1").style.right = "0px";
            document.getElementById("imgban1").style.zIndex = "1000";
            document.getElementById("imgban2").style.right = "-1200px";
            document.getElementById("imgban2").style.zIndex = "1500";
        }, 2500);
        bannerStatus = 2;
    }

    else if (bannerStatus === 2) {
        setTimeout(function () {
            document.getElementById("imgban2").style.right = "0px";
            document.getElementById("imgban2").style.zIndex = "1000";
            document.getElementById("imgban1").style.right = "1200px";
            document.getElementById("imgban1").style.zIndex = "500";
        }, 2500);
        bannerStatus = 1;
    }
}

window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}