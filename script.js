
function activatePopUps(){
    var popUps = document.getElementById("pop");
    popUps.classList.remove("activeforMobileSeat");
    popUps.classList.remove("activeforMobile");
    popUps.classList.add("active");
    
}

function activatePopUpsforMobileSeat(){
    var popUps = document.getElementById("pop");
    popUps.classList.remove("active");
    popUps.classList.remove("activeforMobile");
    popUps.classList.add("activeforMobileSeat");

}

function activatePopUpsforMobile(){
    var popUps = document.getElementById("pop");
    popUps.classList.remove("active");
    popUps.classList.remove("activeforMobileSeat");
    popUps.classList.add("activeforMobile");

}

function openPopupForSeat(){
    mobileWidth = 600;    
    if(window.innerWidth <= 600){
        openPopupSeatforMobile();
    }
    else{
        openPopup("mySeat");
    }
}

function checkWidthtoChangeHeightforSeat(){
    mobileWidth = 600;    
    if(window.innerWidth <= 600){
        activatePopUpsforMobileSeat();
    }
    else{
        activatePopUps();
    }
}

function checkWidthtoChangeHeight(){
    mobileWidth = 600; 
    var popSeat = document.getElementById("mySeat"); 

    var SeatHasPopOpenforMobile = popSeat.classList.contains("PopOpenSeatforMobile");
    if(SeatHasPopOpenforMobile && window.innerWidth <= 600){
        activatePopUpsforMobileSeat(); 
    }
    else if(window.innerWidth <= 600){
        activatePopUpsforMobile();
    }
    else{
        activatePopUps();
    }
}
function openPopup(popupId){
    var popup = document.getElementById(popupId);
    popup.classList.add("PopOpen");
}

function openPopupSeatforMobile(){
    var popup = document.getElementById("mySeat");
    popup.classList.add("mobile");
    popup.classList.add("PopOpenSeatforMobile");

}

function closePopupSeatforMobile() {
    var popup = document.getElementById("mySeat");
    popup.classList.remove("PopOpenSeatforMobile");
    popup.classList.add("PopCloseSeatforMobile");
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
    var SeatHasPopCloseforMobile = popSeat.classList.contains("PopCloseSeatforMobile"); 
    if (SeatHasPopClose){
        popSeat.classList.remove("PopClose");
    }
    if(SeatHasPopCloseforMobile){
        popSeat.classList.remove("PopCloseSeatforMobile");

    }
} 




function checkOpenContact(){
    var popSeat = document.getElementById("mySeat"); 
    var SeatHasPopOpenforMobile= popSeat.classList.contains("PopOpenSeatforMobile");
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
    else if(SeatHasPopOpenforMobile){
        popSeat.classList.remove("PopOpenSeatforMobile");
        popSeat.classList.add("PopCloseSeatforMobile");
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
    var SeatHasPopOpenforMobile= popSeat.classList.contains("PopOpenSeatforMobile");

    if (ContactHasPopOpen){
        popContact.classList.remove("PopOpen");
        popContact.classList.add("PopClose"); 
    }
    else if(SeatHasPopOpen){
        popSeat.classList.remove("PopOpen");
        popSeat.classList.add("PopClose");
    }
    else if(SeatHasPopOpenforMobile){
        popSeat.classList.remove("PopOpenSeatforMobile");
        popSeat.classList.add("PopCloseSeatforMobile");
    }
} 

function checkCloseAbout(){
    var popAbout= document.getElementById("myAbout"); 

    var AboutHasPopClose = popAbout.classList.contains("PopClose");

    if (AboutHasPopClose){
        popAbout.classList.remove("PopClose");
    }
} 


function checkWindowSizeforMobile() {
    minWidth = 600;
    var popSeat = document.getElementById("mySeat"); 
    var SeatHasPopOpen= popSeat.classList.contains("PopOpen"); 
    if(SeatHasPopOpen){
        if (window.innerWidth <= minWidth) {
            // Do something when the window width is less than the threshold
            var popSeat = document.getElementById("mySeat");
            popSeat.classList.add("mobile");
            popSeat.classList.add("PopOpenSeatforMobile");
            popSeat.classList.remove("PopOpen");
        }
    }

}

function checkWindowSizeforPC() {
    minWidth = 600;
    var popSeat = document.getElementById("mySeat"); 
    var SeatHasPopOpenforMobile= popSeat.classList.contains("PopOpenSeatforMobile"); 

    if(SeatHasPopOpenforMobile){
        if (window.innerWidth > minWidth) {
            // Do something when the window width is less than the threshold
            var popSeat = document.getElementById("mySeat");
            popSeat.classList.remove("mobile");
            popSeat.classList.remove("PopOpenSeatforMobile");
            popSeat.classList.add("PopOpen");
        } 
    }

}
//
/* We need to check whether other pop ups are open before doing our animation
    We also need to make sure the popClose classlist is not added, because that
    will not allow us to add the popUp classlist after.
    */
document.getElementById("triggerSeat").addEventListener("click", function () {
    checkOpenSeat();
    checkCloseSeat();

    openPopupForSeat();
    checkWidthtoChangeHeight();
});

document.getElementById("triggerContact").addEventListener("click", function () {

    checkOpenContact();
    checkCloseContact();
    checkWidthtoChangeHeight();
    openPopup("myContact");
});

document.getElementById("triggerAbout").addEventListener("click", function () {

    checkOpenAbout();
    checkCloseAbout();
    checkWidthtoChangeHeight()
    openPopup("myAbout");
});


//event listener when resizing window
var popSeat = document.getElementById("mySeat"); 

var SeatHasPopOpen= popSeat.classList.contains("PopOpen");
var SeatHasPopOpenforMobile= popSeat.classList.contains("PopOpenSeatforMobile");

    window.addEventListener('resize', checkWindowSizeforMobile);
    window.addEventListener('resize', checkWindowSizeforPC);
    window.addEventListener('resize', checkWidthtoChangeHeight);

