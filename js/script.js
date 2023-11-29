window.addEventListener("hashchange", function () {
  const page = window.location.hash.substring(1);
  loadPage(page);
});

function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("container").innerHTML = html;
      const script = document.createElement("script");
      script.src = `../js/${page}.js`;
      script.type = "module";
      script.defer = true;
      document.body.appendChild(script);
    });
}

const initialPage = window.location.hash.substring(1) || "home";
loadPage(initialPage);
