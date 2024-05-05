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


//creates listener for returning to blog  feed
const addBlogReturnListener = () => {
  const blogReturn = document.querySelector('.returnToBlog');
  if (blogReturn) {
    blogReturn.addEventListener('mousedown', () => {
      loadBlog();
    });
  }
};

//creates listener for returning to portfolio feed
const addPortfolioReturnListener = () => {
  const portfolioReturn = document.querySelector('.returnToPortfolio');
  if (portfolioReturn) {
    portfolioReturn.addEventListener('mousedown', () => {
      loadPortfolio();
    });
  }
};

const addImageListener = () => {
  const thumbnails = document.querySelectorAll('.thumbnails');
  if (thumbnails) {
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('mousedown', () => {
        fetch(`https://raw.githubusercontent.com/surger-y/surger-y.github.io/main/pages/blog/blog${index}.html`)
          .then(response => response.text())
          .then(result => blog.innerHTML = result);
      });
    }
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

