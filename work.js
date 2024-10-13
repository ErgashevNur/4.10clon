import { countries } from "./app.js";

let tillar = {};
let davlatlar = {};

countries.forEach((country) => {
  if (country.languages) {
    for (let key in country.languages) {
      let language = country.languages[key];

      tillar[language] = (tillar[language] || 0) + 1;

      if (!davlatlar[language]) {
        davlatlar[language] = [];
      }
      davlatlar[language].push(country.name.common);
    }
  }
});

console.log(tillar, davlatlar);

const barchaTillar = Object.entries(tillar).filter(
  ([language, count]) => count <= 5
);

barchaTillar.forEach(([language, count]) => {
  console.log(`\n${language}: ${count} ta davlatda ishlatiladi`);
  console.log(`Davlatlar: ${davlatlar[language].join(", ")}`);
});
