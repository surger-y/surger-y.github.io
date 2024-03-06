let vanish = document.querySelectorAll(".vanish");
for (let i = 0; i < vanish.length; i++) {
  vanish[i].innerHTML = vanish[i].textContent.replace(
    /([\w'-]+|[^\w\s])/g,
    "<span>$1</span>"
  );
}
