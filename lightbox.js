/* Click an image to see it large over the page.
   Works on any <button> inside a .strip (project pages) and on .flyer
   buttons (Party Flyers). The large version is the button's data-full
   attribute if it has one, otherwise the image inside it.
   A link with a data-video attribute (<a href="video.mp4" data-video>)
   opens that video in the same overlay; without JavaScript the link
   just opens the file.
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
    '<img src="" alt="">' +
    '<video controls playsinline preload="metadata" hidden></video>';
  document.body.appendChild(box);

  var img = box.querySelector("img");
  var video = box.querySelector("video");
  var closeBtn = box.querySelector(".lightbox-close");
  var opener = null;

  function open(btn) {
    var thumb = btn.querySelector("img");
    opener = btn;
    video.hidden = true;
    img.hidden = false;
    img.src = btn.getAttribute("data-full") || (thumb && thumb.getAttribute("src")) || "";
    img.alt = (thumb && thumb.alt) || "";
    box.hidden = false;
    closeBtn.focus();
  }

  function openVideo(link) {
    opener = link;
    img.hidden = true;
    img.removeAttribute("src");
    video.hidden = false;
    video.src = link.getAttribute("href");
    video.poster = link.getAttribute("data-poster") || "";
    box.setAttribute("aria-label", "Video");
    box.hidden = false;
    closeBtn.focus();
    video.play().catch(function () {});   // if autoplay is blocked, the controls are there
  }

  function close() {
    box.hidden = true;
    video.pause();
    video.removeAttribute("src");
    video.removeAttribute("poster");
    video.load();
    box.setAttribute("aria-label", "Image");
    img.removeAttribute("src");
    if (opener) opener.focus();
  }

  var items = document.querySelectorAll(".strip button, .flyer");
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () { open(this); });
  }

  var links = document.querySelectorAll("a[data-video]");
  for (var j = 0; j < links.length; j++) {
    links[j].addEventListener("click", function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;   // let "open in new tab" work
      e.preventDefault();
      openVideo(this);
    });
  }

  closeBtn.addEventListener("click", close);
  box.addEventListener("click", function (e) { if (e.target === box) close(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !box.hidden) close();
  });

})();
