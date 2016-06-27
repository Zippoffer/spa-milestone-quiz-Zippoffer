(function() {
    var populatePage = function(inventory) {
        var toDom = "";
        var container = document.getElementById("output");
        // Loop over the inventory and populate the page
        inventory.forEach(function(car, i) {
            var currentCar = inventory[i];



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
                          <h3>${currentCar.purchased}</h3>
                          <h3>${currentCar.color}</h3}
                          </div>
                        </section>
                        
                        
                      </div>`;

            container.innerHTML += carCard;
        });
        var carsOnPage = document.getElementsByClassName("car");
        // console.log("carsOnPage", carsOnPage);
        // carLot.activateEvents();
        for (let w = 0; w < carsOnPage.length; w++) {
            console.log(inventory[w]);
            //passes car and color of car to be set as border color of that car
            carLot.addCSS(carsOnPage[w], inventory[w].color);
            //adds event handlers to each car
            carLot.addHandlers(carsOnPage[w], carsOnPage);
        }
        // Load the inventory and send a callback function to be
        // invoked after the process is complete
    }
    carLot.loadInventory(populatePage);
})();



////////////////////////