//Initial page load
const portfolio = document.querySelector('.left-wrapper');
const blog = document.querySelector('.right-wrapper');

const loadPortfolio = () => {
  fetch('https://raw.githubusercontent.com/surger-y/surger-y.github.io/main/pages/main-left.html')
    .then(response => response.text())
    .then(result => portfolio.innerHTML = result);
};

const loadBlog = () => {
  fetch('https://raw.githubusercontent.com/surger-y/surger-y.github.io/main/pages/main-right.html')
    .then(response => response.text())
    .then(result => blog.innerHTML = result);
};

if (portfolio && blog) {
  loadPortfolio();
  loadBlog();
}


//Listener for returning to blogfeed
const addBlogReturnListener = () => {
  const blogReturn = document.querySelector('.returnToBlog');
  if (blogReturn) {
    blogReturn.addEventListener('mousedown', () => {
      loadBlog();
    });
  }
};

const addImageListener = () => {
  const image = document.querySelector('img');
  if (image) {
    image.addEventListener('mousedown', () => {
      fetch('https://raw.githubusercontent.com/surger-y/surger-y.github.io/main/pages/blog/blog001.html')
        .then(response => response.text())
        .then(result => blog.innerHTML = result);
    });
  }
};

//observer for changes in dom 
const observer = new MutationObserver(mutationsList => {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes.length) {
      addImageListener();
      addBlogReturnListener();
    }
  }
});
observer.observe(document.body, { childList: true, subtree: true });

