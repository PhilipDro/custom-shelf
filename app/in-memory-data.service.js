"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var shelves = [
            {
                id: 1,
                name: 'Veganes Regal',
                description: 'Das vegane Regal ist das perfekte Einrichtungsstück für den umweltbewussten Bürger. Es passt stilbewusst zwischen Ihr Weinregal und den vintage Kinderwagen in Ihrer Altbauwohnung im Prenzlauer Berg.',
                imagePath: 'app/images/1/1.jpg',
                state: 1,
                parts: 1,
                width: 80,
                depth: 25,
                height: 220,
                wood: 'erle',
                stain: 'natur',
                deco: 'deco a',
                ledge: 'ledge a',
                price: 1194,
                surface: 'geölt'
            },
            {
                id: 2,
                name: 'Sacleff',
                description: "\n          F\u00FCr Menschen, die nicht nur B\u00FCcher unterbringen wollen.\n          Massivholzregal zerlegbar, wahlweise mit 1 - 4 Schubladen.\n          Einlegeb\u00F6den mittels Zahnleisten in der H\u00F6he verstellbar.\n        ",
                imagePath: 'app/images/2/1.jpg',
                state: 1,
                parts: 1,
                width: 80,
                depth: 35,
                height: 220,
                wood: 'erle',
                stain: 'natur',
                deco: 'deco a',
                ledge: 'ledge a',
                price: 1143,
                drawer: 1,
                surface: 'geölt'
            },
            {
                id: 3,
                name: 'Lango M',
                description: "\n          F\u00FCr Menschen, die ihr B\u00FCro gerne griffbereit haben wollen.\n          Die Unterschr\u00E4nke mit einer H\u00F6he von 90 cm bieten Platz f\u00FCr zwei Reihen Aktenordner.\n          Die ausziehbare Platte hilft beim Sortieren der B\u00FCcher.\n          Dar\u00FCber befindet sich ein offenes Regal.\n          Die Tiefe des Regalaufsatzes betr\u00E4gt 28 cm.\n        ",
                imagePath: 'app/images/3/1.jpg',
                imagePath2: 'app/images/3/2.jpg',
                imagePath3: 'app/images/3/3.jpg',
                imagePath4: 'app/images/3/4.jpg',
                imagePath5: 'app/images/3/5.jpg',
                state: 1,
                parts: 1,
                width: 160,
                depth: 45,
                height: 220,
                wood: 'erle',
                stain: 'natur',
                deco: 'deco a',
                ledge: 'ledge a',
                price: 1553,
                surface: 'geölt'
            },
            {
                id: 4,
                name: 'Setzregal',
                description: "\n          F\u00FCr Leute, die sich nicht festsetzen wollen.\n          Aus Massivholz Erle hergestellt und zerlegbar.\n          Durch Zusammenstellen von einzelnen Regalen unendlich\n          erweiterbar. Am letzten Segment wird dann eine Kranz -\n          und Sockelleiste angesetzt.\n        ",
                imagePath: 'app/images/4/1.jpg',
                imagePath2: 'app/images/4/2.jpg',
                imagePath3: 'app/images/4/3.jpg',
                state: 1,
                parts: 1,
                width: 80,
                depth: 25,
                height: 220,
                wood: 'erle',
                stain: 'natur',
                deco: 'keine',
                ledge: 'keine',
                price: 846,
                surface: 'geölt'
            },
            {
                id: 5,
                name: 'Herrmann',
                description: "\n          F\u00FCr diejenigen, die einen Kontrast zum kuscheligen Ambiente suchen.\n          Die St\u00FCtzen (6 cm breit) aus geb\u00FCrsteten Stahl dienen als Auflage\n          f\u00FCr Holzb\u00F6den in 30mm St\u00E4rke.\n        ",
                imagePath: 'app/images/5/1.jpg',
                imagePath2: 'app/images/5/2.jpg',
                imagePath3: 'app/images/5/3.jpg',
                imagePath4: 'app/images/5/4.jpg',
                imagePath5: 'app/images/5/5.jpg',
                state: 1,
                parts: 1,
                width: 80,
                depth: 25,
                height: 220,
                wood: 'erle',
                stain: 'natur',
                deco: 'keine',
                ledge: 'keine',
                price: 804,
                surface: 'geölt'
            },
            {
                id: 6,
                name: 'Leonora',
                description: "\n          F\u00FCr diejenigen, die Ihre B\u00FCcher nicht einstauben lassen wollen.\n          Die klare Form des B\u00FCcherregals lenkt den Blick auf das Wesentliche.\n          Der Unterschrank ist w\u00E4hlbar mit Schiebet\u00FCren oder drei Schubladen erh\u00E4ltlich.\n          Die Glasschiebet\u00FCren im oberen Bereich \u00FCberzeugen mit ihrer Eleganz.\n        ",
                imagePath: 'app/images/6/1.jpg',
                imagePath2: 'app/images/6/2.jpg',
                imagePath3: 'app/images/6/3.jpg',
                imagePath4: 'app/images/6/4.jpg',
                imagePath5: 'app/images/6/5.jpg',
                state: 1,
                parts: 1,
                width: 100,
                depth: 45,
                height: 200,
                wood: 'erle',
                stain: 'natur',
                deco: 'keine',
                ledge: 'keine',
                price: 1200,
                leoDrawers: 0,
                slidingDoor: 1,
<<<<<<< HEAD
                surface: 'geölt'
=======
                surface: 'geölt + gewachst'
>>>>>>> e791b97d7887d30e949a899d24978ee1d1e302bd
                // TODO 1 segment = 1m breit
                // oberregal = 600€
                // schiebetür unten = 400€
                // unterschrank mit schubladen 600€
            }
        ];
        return { shelves: shelves };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//TODO einzelne segmente zwischen 60 und 110
//# sourceMappingURL=in-memory-data.service.js.map