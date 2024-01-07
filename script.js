
function activatePopUps(){
    var popUps = document.getElementById("pop");

    var AboutHasPopOpen = popUps.classList.contains("pop");
    if(!AboutHasPopOpen){
        popUps.classList.add("active");
    }
}
function openPopup(popupId){
    var popup = document.getElementById(popupId);
    popup.classList.add("PopOpen");
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.remove("PopOpen");
    popup.classList.add("PopClose");
}

function checkOpenSeat(){
    var popAbout = document.getElementById("myAbout"); 
    var popContact = document.getElementById("myContact"); 

    var AboutHasPopOpen = popAbout.classList.contains("PopOpen");
    var ContactHasPopOpen= popContact.classList.contains("PopOpen");

    if (AboutHasPopOpen){
        popAbout.classList.remove("PopOpen");
        popAbout.classList.add("PopClose"); 
    }
    else if(ContactHasPopOpen){
        popContact.classList.remove("PopOpen");
        popContact.classList.add("PopClose");
    }
} 

function checkCloseSeat(){
    var popSeat = document.getElementById("mySeat"); 

    var SeatHasPopClose = popSeat.classList.contains("PopClose");

    if (SeatHasPopClose){
        popSeat.classList.remove("PopClose");
    }
} 




function checkOpenContact(){
    var popSeat = document.getElementById("mySeat"); 
    var popAbout = document.getElementById("myAbout"); 

    var SeatHasPopOpen= popSeat.classList.contains("PopOpen");
    var AboutHasPopOpen = popAbout.classList.contains("PopOpen");

    if (AboutHasPopOpen){
        popAbout.classList.remove("PopOpen");
        popAbout.classList.add("PopClose"); 
    }
    else if(SeatHasPopOpen){
        popSeat.classList.remove("PopOpen");
        popSeat.classList.add("PopClose");
    }
} 

function checkCloseContact(){
    var popContact= document.getElementById("myContact"); 

    var ContactHasPopClose = popContact.classList.contains("PopClose");

    if (ContactHasPopClose){
        popContact.classList.remove("PopClose");
    }
} 


function checkOpenAbout(){
    var popContact = document.getElementById("myContact"); 
    var popSeat = document.getElementById("mySeat"); 

    var ContactHasPopOpen = popContact.classList.contains("PopOpen");
    var SeatHasPopOpen= popSeat.classList.contains("PopOpen");

    if (ContactHasPopOpen){
        popContact.classList.remove("PopOpen");
        popContact.classList.add("PopClose"); 
    }
    else if(SeatHasPopOpen){
        popSeat.classList.remove("PopOpen");
        popSeat.classList.add("PopClose");
    }
} 

function checkCloseAbout(){
    var popAbout= document.getElementById("myAbout"); 

    var AboutHasPopClose = popAbout.classList.contains("PopClose");

    if (AboutHasPopClose){
        popAbout.classList.remove("PopClose");
    }
} 



/* We need to check whether other pop ups are open before doing our animation
    We also need to make sure the popClose classlist is not added, because that
    will not allow us to add the popUp classlist after.
    */
document.getElementById("triggerSeat").addEventListener("click", function () {
    activatePopUps();
    checkOpenSeat();
    checkCloseSeat();
    openPopup("mySeat");
});

document.getElementById("triggerContact").addEventListener("click", function () {
    activatePopUps();
    checkOpenContact();
    checkCloseContact();
    openPopup("myContact");
});

document.getElementById("triggerAbout").addEventListener("click", function () {
    activatePopUps();
    checkOpenAbout();
    checkCloseAbout();
    openPopup("myAbout");
});

