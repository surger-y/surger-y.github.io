
// WRAPS EACH WORD IN "VANISH" CLASS ELEMENTS IN SPANS
let vanish = document.querySelectorAll(".vanish");
for (let i = 0; i < vanish.length; i++) {
  vanish[i].innerHTML = vanish[i].textContent.replace(
    /([\w'-]+|[^\w\s])/g,
    "<span>$1</span>"
  );


  // CREATES AND APPLIES RANDOM RGB VALUES TO "VANISH" SPAN BACKGROUNDS
  function generateRandomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  let spans = vanish[i].querySelectorAll("span");

  spans.forEach(span => {
    const r = generateRandomInteger(0, 255);
    const g = generateRandomInteger(0, 255);
    const b = generateRandomInteger(0, 255);
    span.style.backgroundColor = `rgb(${r},${g},${b})`;
  });

}













