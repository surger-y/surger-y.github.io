let vanish = document.querySelectorAll(".vanish");
for (let i = 0; i < vanish.length; i++) {
  vanish[i].innerHTML = vanish[i].textContent.replace(
    /([\w'-]+|[^\w\s])/g,
    "<span>$1</span>"
  );
  function generateRandomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  // After setting innerHTML, select the newly created spans
  let spans = vanish[i].querySelectorAll("span");

  // Apply a unique color to each span
  spans.forEach(span => {
    const r = generateRandomInteger(0, 255);
    const g = generateRandomInteger(0, 255);
    const b = generateRandomInteger(0, 255);
    span.style.backgroundColor = `rgb(${r},${g},${b})`;
  });

}












