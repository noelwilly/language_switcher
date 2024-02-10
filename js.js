"use strict";

let locale = "de";
const selectElement = document.querySelector(".sprog");
const result = document.querySelector(".result");

selectElement.addEventListener("change", (event) => {
  locale = `${event.target.value}`;

  texts[locale].texts.forEach((each) => {
    document.querySelector(each.location).textContent = each.text;
    // console.log(document.querySelector(each.location));
  });
});

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

console.log(texts[locale].texts[0].text);
// console.log(texts.de.texts[0].text);
