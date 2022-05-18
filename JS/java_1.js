
(function () {
 "use strict";

 /**
  * Easy selector helper function
  */
 const select = (el, all = false) => {
  el = el.trim()
  if (all) {
   return [...document.querySelectorAll(el)]
  } else {
   return document.querySelector(el)
  }
 }

 /**
  * Easy event listener function
  */
 const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
   if (all) {
    selectEl.forEach(e => e.addEventListener(type, listener))
   } else {
    selectEl.addEventListener(type, listener)
   }
  }
 }

 /**
  * Easy on scroll event listener 
  */
 const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
 }

 /**
  * Navbar links active state on scroll
  */
 let navbarlinks = select('#navbar .scrollto', true)
 const navbarlinksActive = () => {
  let position = window.scrollY + 200
  navbarlinks.forEach(navbarlink => {
   if (!navbarlink.hash) return
   let section = select(navbarlink.hash)
   if (!section) return
   if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
    navbarlink.classList.add('active')
   } else {
    navbarlink.classList.remove('active')
   }
  })
 }


 /**
  * Toggle .header-scrolled class to #header when page is scrolled
  */
 let selectHeader = select('#header')
 if (selectHeader) {
  const headerScrolled = () => {
   if (window.scrollY > 100) {
    selectHeader.classList.add('header-scrolled')
   } else {
    selectHeader.classList.remove('header-scrolled')
   }
  }
  window.addEventListener('load', headerScrolled)
  onscroll(document, headerScrolled)
 }

 /**
  * Mobile nav toggle
  */
 on('click', '.mobile-nav-toggle', function (e) {
  select('#navbar').classList.toggle('navbar-mobile')
  this.classList.toggle('bi-list')
  this.classList.toggle('bi-x')
 })

 /**
  * Mobile nav dropdowns activate
  */
 on('click', '.navbar .dropdown > a', function (e) {
  if (select('#navbar').classList.contains('navbar-mobile')) {
   e.preventDefault()
   this.nextElementSibling.classList.toggle('dropdown-active')
  }
 }, true)


 /**
  * Preloader
  */
 let preloader = select('#preloader');
 if (preloader) {
  window.addEventListener('load', () => {
   preloader.remove()
  });
 }




})()

// end nav


// start section 3
// start window 
$('.section-3 .center').slick({
 centerMode: true,
 centerPadding: '60px',
 arrows: false,
 slidesToShow: 3,
 responsive: [
  {
   breakpoint: 768,
   settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 2
   }
  },
  {
   breakpoint: 480,
   settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 1
   }
  }
 ]
});

$('.section-4 .center').slick({
 centerMode: true,
 centerPadding: '60px',
 slidesToShow: 3,
 arrows: false,

 responsive: [
  {
   breakpoint: 768,
   settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 2
   }
  },
  {
   breakpoint: 480,
   settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 1
   }
  }
 ]
});