window.addEventListener("hashchange", function () {
  const page = window.location.hash.substring(1);
  loadPage(page);
});

function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("container").innerHTML = html;
    });
}

// Load the initial page
const initialPage = window.location.hash.substring(1) || "home";
loadPage(initialPage);

