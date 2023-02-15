var currentUrl = window.location.href;


var links = document.querySelectorAll('nav a');
console.log(currentUrl);
for (var i = 0; i < links.length; i++) {
    console.log(links);
  if (links[i].href === currentUrl) {
    links[i].classList.add('active');
  }
}
  