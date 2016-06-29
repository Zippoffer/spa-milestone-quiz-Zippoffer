// (function(carLot) {

var populatePage = function(inventory) {
    var toDom = "";
    var container = document.getElementById("output");
    // var purchased;
    var counter = null;
    var input;


    for (var i = 0; i < inventory.length; i++) {
        counter++;
        var car = inventory[i];
        // Establish purchased value
        if (car.purchased === false) {
            purchased = `On the lot!`;
        } else {
            purchased = `Sold`;
        }
        // console.log("purchased car", car);
        // Loop over the inventory and populate the page
        inventory.forEach(function(car, i) {
            var currentCar = inventory[i];
            // console.log("currentCar", currentCar);

            var carCard = `<div class="card">
           
                        <header>
                        <h1>${currentCar.year}</h1>
                          <h2>${currentCar.make} ${currentCar.model}</h2>  
                        </header>
                        <section>
                          <div class="imageContainer">
                            <img src="${currentCar.image}">
                          </div>
                          <div class="row">
                          <h3>${currentCar.price}</h3>
                          <h3>${purchased}</h3>
                          <h3>${currentCar.color}</h3}
                          </div>
                        </section>
                          <p class="carInfo">${currentCar.description}</p> 
                      </div>`;

            container.innerHTML += carCard;
        });
        var carsOnPage = document.getElementsByClassName("card");
        console.log("carsOnPage", carsOnPage);
        for (let i = 0; i < carsOnPage.length; i++) {
            console.log(">>>>", inventory[i]);
            var currentCar = carsOnPage[i];
            console.log("???", currentCar);
            //passes car and color of car to be set as border color of that car
            carLot.addCSS(currentCar, inventory[i].color);
            //adds event handlers to each car
            carLot.addHandlers(currentCar, carsOnPage);


        }
        // Load the inventory and send a callback function to be
        // invoked after the process is complete
        return inventory;
    }
    carLot.activateEvents();
}
carLot.loadInventory(populatePage);
// })(carLot || {});