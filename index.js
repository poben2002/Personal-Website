"use strict";
(function() {
  window.addEventListener("load", init);

  function init() {
    let contactButton = id('hire');
    contactButton.addEventListener('click', scroll);
    let Rbutton = id('resume');
    Rbutton.addEventListener('click', resume);
    let Gbutton = id('github');
    Gbutton.addEventListener('click', git);
    let Lbutton = id('linked');
    Lbutton.addEventListener('click', linked);
  }

  function id(idName) {
    return document.getElementById(idName);
  }

  function resume() {
    window.location.href='file:///C:/Users/benja/Downloads/Resume.pdf';
  }

  function git() {
    window.location.href='https://github.com/poben2002';
  }

  function linked() {
    window.location.href='https://www.linkedin.com/in/benjamin-po-652044222/';
  }

  function scroll() {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: 'smooth'
  });
  }
})();