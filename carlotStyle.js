// The final IIFE should augment the object with two more functions.
// One function resets the border thickness and background color for each currentCar element back to the original values.
// The other function changes the thickness of the border of a currentCar element, and changes its background color.
// The function must accept two arguments.
//     1. A currentCar DOM element that was clicked on.
//     1. A color name.

var carLot = (function(carCSS) {


    carCSS.addCSS = function(currentCar, color) {
        //sets border color to currentCar color
        currentCar.style.borderColor = color;

    };


    carCSS.clickEffect = function(currentCar, color) {


        // Thicken border and add background color
        currentCar.style.borderWidth = "6px";
        currentCar.style.backgroundColor = "#B59EFF";

        // Clear descriptionInput text
        document.getElementById("descriptionInput").value = "";

        // Set focus on descriptionInput
        document.getElementById("descriptionInput").focus();

        // Add class of selected to currentCarCard
        currentCar.classList.add("selected");

        currentCar.setAttribute("id", "clickedCar");

        // console.log("carClicked", carClicked);
    };




    // carLot.activateEvents();
    return carCSS;
})(carLot || {});