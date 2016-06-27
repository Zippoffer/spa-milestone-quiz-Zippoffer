var carLot = (function(carLot) {
    var inventory = [];

    // return {
    //     getInventory: function(carInventory) {
    //         for (var i = 0; i < carInventory.cars.length; i++) {
    //             inventory.push(carInventory.cars[i]);
    carLot.getInventory = function() {

    }
    carLot.loadInventory = function(callback) {
        var inventoryLoader = new XMLHttpRequest();
        inventoryLoader.open("GET", "inventory.json")
        // inventoryLoader.open("GET", inventory.json, true);
        inventoryLoader.send();
        inventoryLoader.addEventListener("load", function() {
            inventory = JSON.parse(event.target.responseText).cars;
            callback(inventory);
        });
    }



    return carLot;


})(carLot || {});