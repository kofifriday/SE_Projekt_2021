// Initialize HERE Map
/*const platform = new H.service.Platform({ apikey: hereCredentials.apikey });
const defaultLayers = platform.createDefaultLayers();
const map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
  center,
  zoom: 12,
  pixelRatio: window.devicePixelRatio || 1
});
const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
const provider = map.getBaseLayer().getProvider();

//Initialize router and geocoder
//const router = platform.getRoutingService();
//const geocoder = platform.getGeocodingService();

window.addEventListener('resize', () => map.getViewPort().resize());

//export { router, geocoder } */

const menu  = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

//Display Mobile Menu
const mobileMenu = () =>{
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu);
