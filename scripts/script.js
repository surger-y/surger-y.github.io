let vanish = document.querySelector(".vanish");
vanish.innerHTML = vanish.textContent.replace(
  /([\w'-]+|[^\w\s])/g,
  "<span>$1</span>"
);
