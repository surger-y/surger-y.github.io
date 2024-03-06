//my code, which takes the text from a p tag, splits it into an array,
//runs a for loop which adds a span tag around each item in the array,
// joins the array back together, and places the new text into the html p tag

// let text = document.querySelector("p");
// let textArray = text.textContent.split(" ");

// for (let i = 0; i < textArray.length; i++) {
//     textArray[i] = textArray[i].replace(/\w+/g, "<span>$& </span>");
// }

// newText = textArray.join('');
// text.innerHTML = newText;

//chat gpt's code, which simplies this by running . replace directly on

let vanish = document.querySelector(".vanish");
vanish.innerHTML = vanish.textContent.replace(
  /([\w'-]+|[^\w\s])/g,
  "<span>$1</span>"
);

function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  document.querySelector("#date").textContent = currentDateTime;
}
setInterval(updateDateTime, 1000);

