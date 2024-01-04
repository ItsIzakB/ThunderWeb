function openPopSeat() {
    document.getElementById("myAbout").style.display = "none";
    document.getElementById("myContact").style.display = "none";
    document.getElementById("mySeat").style.display = "flex";
}

function openPopContact() {
    document.getElementById("myAbout").style.display = "none";
    document.getElementById("myContact").style.display = "flex";
    document.getElementById("mySeat").style.display = "none";
}

function openPopAbout() {
    document.getElementById("myAbout").style.display = "flex";
    document.getElementById("myContact").style.display = "none";
    document.getElementById("mySeat").style.display = "none";
}

document.getElementById("triggerSeat").addEventListener("click", openPopSeat);
document.getElementById("triggerContact").addEventListener("click", openPopContact);
document.getElementById("triggerAbout").addEventListener("click", openPopAbout);
