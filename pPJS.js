const menu = document.querySelector("#mobileMenu");
const menuLinks = document.querySelector(".navbarMenu");
const navLogo = document.querySelector("#navbarLogo");

// Prikazi meni pritiskom na dugme i izmeni sliku dugmeta kad se stisne
const mobileMenu = () => {
  //-ovo je arrow function,ona na dozvoljava da pisemo kracu function sintax,prostiji kod.
  menu.classList.toggle("is-active"); //classlist,da dodam stil css pri pritisku dugmeta.toggle,kada pritisnem opet dugme da se vrati na staro ..
  menuLinks.classList.toggle("active"); // classList,za razliku od .style.backgroundColor primenjuje celu klasu,a ne menja samo jedan atrinut kao .style
};

menu.addEventListener("click", mobileMenu);

// Prikazi koji je Menu aktivan tako sto cemo primeniti na njega klasu .highlight
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#homePage");
  const aboutMenu = document.querySelector("#aboutPage");
  const servicesMenu = document.querySelector("#servicesPage");
  let scrolPos = window.scrollY; //ova osobina vraca informacije o pikselima dok skrolujes(kada skrolusej u konzoli ti pise tacno na kojoj si visini)

  //dodaje highlight class u menu  items
  if (window.innerWidth > 920 && scrolPos < 700) {
    //ako je sirina ekrena veca od 920(znaci necemo da primenimo highligh za mobile verziju) i ako je scrollY na poziciji manjoj od 700
    homeMenu.classList.add("highlight"); //ubacujem klasu u home tab.
    aboutMenu.classList.remove("highlight"); //kada budem vracao odozdo menu,moram da izkljucim about highlight
    return; //mora return inace ce kod biti cudan
  } else if (window.innerWidth > 920 && scrolPos < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 920 && scrolPos < 2800) {
    servicesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }
  if ((elem && window.innerWidth < 920 && scrolPos < 600) || elem) {
    elem.classList.remove("highlight"); //ako smo vec skrolali ,i zatim smanjimo stranicu na mob,ostace ljubicasti highlight.ova komanda ga skida
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//Zatvori MobileMenu kada klinkes na menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars)
    //&& menuBars - znaci  kada je menuBars true -ili ti kada smo u mobilnom meniju is-active se koristi,znaci da je true
    menu.classList.toggle("is-active");
  menuLinks.classList.remove("active");
};
menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
