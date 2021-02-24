$(document).ready(function() {
    
    //activate wow.js
     new WOW().init();
  
    //activate fullpage.js
    $('#fullpage').fullpage({
      scrollBar: true,
      navigation: true,
      navigationTooltips: ['Sobre mi', 'Habilidades', 'Proyectos', 'Contactos'],
      loopBottom: true,
      sectionSelector: 'section'
    });
});