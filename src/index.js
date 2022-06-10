import _, { forEach } from 'lodash';
import './style.scss';

document.addEventListener('DOMContentLoaded', function() {
  window.onpopstate = handleLocation;
  window.route = route;
  handleLocation();


})

const route = (event) => {
  event = event || window.event;
  event.preventDefault();

  window.history.pushState({}, "", event.target.href);
  handleLocation();

  let $this = event.target,
      navLinks = document.querySelectorAll('.navbar__link');

  forEach(navLinks, (target) => {
    target.classList.remove('active');
  })

  $this.classList.add('active');
};

const routes = {
  404: "/pages/404.html",
  "/": "/pages/index.html",
  "/buy-fonts": "/pages/buy_fonts.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};