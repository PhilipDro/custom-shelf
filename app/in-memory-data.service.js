"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var shelves = [
            {
                id: 1,
                name: 'Veganes Regal',
                description: 'Das vegane Regal ist das perfekte Einrichtungsstück für den umweltbewussten Gutbürger. Es passt stilbewusst zwischen Ihr Weinregal und den vintage Kinderwagen in Ihrer Altbauwohnung im Prenzlauer Berg.',
                imagePath: 'app/images/1/1.jpg',
                imagePath2: 'app/images/1/2.jpg',
                imagePath3: 'app/images/1/3.jpg',
                state: 1,
                parts: 2,
                width: 100,
                depth: 50,
                height: 200,
                wood: 'eiche',
                color: 'brown',
                deco: 'deco a',
                priceBefore: 600,
                price: 600
            },
            {
                id: 2,
                name: 'Wooden Aerodynamico',
                description: 'Entworfen vom schwedischen Interior Kollektiv "Sven" verwendet dieses Stück avantgardistische Formen und macht daraus Sachen.',
                imagePath: 'app/images/2/1.jpg',
                imagePath2: 'app/images/1/2.jpg',
                imagePath3: 'app/images/1/3.jpg',
                state: 1,
                parts: 2,
                width: 100,
                depth: 50,
                height: 200,
                wood: 'eiche',
                color: 'brown',
                deco: 'deco a',
                priceBefore: 400,
                price: 400
            },
            {
                id: 3,
                name: 'Schwarze Ablage',
                description: 'Weniger für die Farbenfrohen, mehr für jene, die dunklere Farben bevorzugen (nicht in schwarz zu haben).',
                imagePath: 'app/images/3/1.jpg',
                state: 1,
                parts: 2,
                width: 100,
                depth: 50,
                height: 200,
                wood: 'eiche',
                color: 'brown',
                deco: 'deco a',
                priceBefore: 1200,
                price: 1200
            },
        ];
        return { shelves: shelves };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map