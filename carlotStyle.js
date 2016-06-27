// The final IIFE should augment the object with two more functions.
// One function resets the border thickness and background color for each car element back to the original values.
// The other function changes the thickness of the border of a car element, and changes its background color.
// The function must accept two arguments.
//     1. A car DOM element that was clicked on.
//     1. A color name.



var CarLot = (function(carCSS) {

    carCSS.addCSS = function(car, color) {
        //sets border color to car color
        car.style.borderColor = color;
    };
    carCSS.clickEffect = function(car, cars, input) {
        for (i = 0; i < cars.length; i++) {
            cars[i].classList.remove("clicked");
        }
        //makes border thicker, changes background color
        car.classList.add("clicked");
        input.focus();
        //clears input field
        input.value = "";

    }

    carCSS.typeEffect = function(selectedCard, input) {
        //sets car description to input value
        var description = selectedCard.getElementsByClassName("description")[0];
        description.innerHTML = input.value;
    }

    return carCSS;
})(CarLot || {});