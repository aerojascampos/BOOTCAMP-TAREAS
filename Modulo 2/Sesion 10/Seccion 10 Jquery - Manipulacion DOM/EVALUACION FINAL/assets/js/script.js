$(document).ready(function() {
    $(".text-body-secondary").click(function() {
      var idBoton = $(this).attr("id");
      /*Se cambia id#RIO por this, para que seleccione la imagen correcta*/
      $("#detalles" + idBoton).toggle();
    });

    /*Se cambia atributo show() por hide*/
    $(".btn-close").click(function() {
      $(this).closest(".detalles").hide();
    });
  });