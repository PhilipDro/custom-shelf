import { Shelf } from './shelf';

export var SHELVES: Shelf[] = [
  {
    id: 1,
    name: 'Veganes Regal',
    description: 'Das vegane Regal ist das perfekte Einrichtungsstück für den umweltbewussten Bürger. Es passt stilbewusst zwischen Ihr Weinregal und den vintage Kinderwagen in Ihrer Altbauwohnung im Prenzlauer Berg.',
    imagePath: 'app/images/1/1.jpg',
    imagePath2: 'app/images/1/2.jpg',
    imagePath3: 'app/images/1/3.jpg',
    state: 1,
    parts: 2,
    width: 80,
    depth: 25,
    height: 220,
    wood: 'eiche',
    color: 'brown',
    deco: 'deco a',
    priceBefore: 600,
    price: 600
  },
  {
    id: 2,
    name: 'Sacleff',
    description: `
      Für Menschen, die nicht nur Bücher unterbringen wollen.
      Massivholzregal zerlegbar, wahlweise mit 1 - 4 Schubladen.
      Einlegeböden mittels Zahnleisten in der Höhe verstellbar.
    `,
    imagePath: 'app/images/2/1.jpg',
    state: 1,
    parts: 1,
    width: 80,
    depth: 35,
    height: 220,
    wood: 'eiche',
    color: 'brown',
    deco: 'deco a',
    priceBefore: 1100,
    price: 1100
  },
  {
    id: 3,
    name: 'Lango M',
    description: `
      Für Menschen, die ihr Büro gerne griffbereit haben wollen.
      Die Unterschränke mit einer Höhe von 90 cm bieten Platz für zwei Reihen Aktenordner.
      Die ausziehbare Platte hilft beim Sortieren der Bücher.
      Darüber befindet sich ein offenes Regal.
      Die Tiefe des Regalaufsatzes beträgt 28 cm.
    `,
    imagePath: 'app/images/3/1.jpg',
    imagePath2: 'app/images/3/2.jpg',
    imagePath3: 'app/images/3/3.jpg',
    imagePath4: 'app/images/3/4.jpg',
    imagePath5: 'app/images/3/5.jpg',
    state: 1,
    parts: 2,
    width: 80,
    depth: 45,
    height: 220,
    wood: 'eiche',
    color: 'brown',
    deco: 'deco a',
    priceBefore: 1400,
    price: 1400
  },
  {
    id: 4,
    name: 'Setzregal',
    description: `
      Für Leute, die sich nicht festsetzen wollen.
      Aus Massivholz Erle hergestellt und zerlegbar.
      Durch Zusammenstellen von einzelnen Regalen unendlich
      erweiterbar. Am letzten Segment wird dann eine Kranz -
      und Sockelleiste angesetzt.
    `,
    imagePath: 'app/images/4/1.jpg',
    imagePath2: 'app/images/4/2.jpg',
    imagePath3: 'app/images/4/3.jpg',
    imagePath4: 'app/images/4/4.jpg',
    imagePath5: 'app/images/4/5.jpg',
    state: 1,
    parts: 1,
    width: 80,
    depth: 25,
    height: 220,
    wood: 'erle',
    stain: 'natur',
    color: 'white',
    deco: 'keine',
    ledge: 'keine',
    priceBefore: 850,
    price: 850

  },
  {
    id: 5,
    name: 'Herrmann',
    description: `
      Für diejenigen, die einen Kontrast zum kuscheligen Ambiente suchen.
      Die Stützen (6 cm breit) aus gebürsteten Stahl dienen als Auflage
      für Holzböden in 30mm Stärke.
    `,
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
    color: 'white',
    deco: 'keine',
    ledge: 'keine',
    priceBefore: 800,
    price: 800
    //keine kranzleisten/ keine vorderleisten
  },
  {
    id: 6,
    name: 'Leonora',
    description: `
      Für Menschen, die Ihre Bücher nicht einstauben lassen wollen.
      Die klare Form des Bücherregals lenkt den Blick auf das Wesentliche.
      Der Unterschrank ist wählbar mit Schiebetüren oder drei Schubladen erhältlich.
      Die Glasschiebetüren im oberen Bereich überzeugen mit ihrer Eleganz.
    `,
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
    color: 'white',
    deco: 'keine',
    ledge: 'keine',
    priceBefore: 800,
    price: 800
    // TODO 1 segment = 1m breit
    // schiebetür unten = 400€
    // oberregal = 600€
    // unterschrank mit schubladen 600€
  }
];
