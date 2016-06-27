var carLot = (function(eventHandlers) {
    let input = document.getElementById("input");
    var currentCar;
    eventHandlers.addHandlers = function(car, cars) {

        //triggers the click effect of each specific card
        car.addEventListener("click", function() {
            currentCar = event.currentTarget;
            carLot.clickEffect(currentCar, cars, input);


        });

        //gives the input a listener that replaces description text
        input.addEventListener("keyup", function() {
            carLot.typeEffect(currentCar, input);
        });


    }
    return eventHandlers;
})(carLot || {});