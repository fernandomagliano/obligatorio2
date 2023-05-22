$(document).ready(function() {
    $(".btn-funcionario").click(function() {
      $(".inicio-container").hide();
      $(".menu-container").show();
    });
  
    $(".btn-modificar-menu").click(function() {
      $(".menu-container").hide();
      $(".modificar-menu-container").show();
    });
  });
  