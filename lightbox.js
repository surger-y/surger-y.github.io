/* Click an image to see it large over the page.
   Works on any <button> inside a .strip (project pages) and on .flyer
   buttons (Party Flyers). The large version is the button's data-full
   attribute if it has one, otherwise the image inside it.
   x, Esc, or a click outside the image closes it. */

(function () {

  var box = document.createElement("div");
  box.className = "lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Image");
  box.hidden = true;
  box.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Close">×</button>' +
    '<img src="" alt="">';
  document.body.appendChild(box);

  var img = box.querySelector("img");
  var closeBtn = box.querySelector(".lightbox-close");
  var opener = null;

  function open(btn) {
    var thumb = btn.querySelector("img");
    opener = btn;
    img.src = btn.getAttribute("data-full") || (thumb && thumb.getAttribute("src")) || "";
    img.alt = (thumb && thumb.alt) || "";
    box.hidden = false;
    closeBtn.focus();
  }

  function close() {
    box.hidden = true;
    img.removeAttribute("src");
    if (opener) opener.focus();
  }

  var items = document.querySelectorAll(".strip button, .flyer");
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () { open(this); });
  }

  closeBtn.addEventListener("click", close);
  box.addEventListener("click", function (e) { if (e.target === box) close(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !box.hidden) close();
  });

})();
