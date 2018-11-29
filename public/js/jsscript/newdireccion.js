window.onload = function() {
    var newdireccion = {};
    var btnEnviar = document.querySelector("#enviar");
  
    btnEnviar.addEventListener("click", function(e) {
      e.preventDefault();
  
      newdireccion.domicilio = document.querySelector("#Domicilio").value;
      newdireccion.ciudad = document.querySelector("#inputCity").value;
      newdireccion.pais = document.querySelector("#inputCountry").value;

  
      $.ajax({
        method: "POST",
        url: "/nuevadireccion",
        data: { direccion: JSON.stringify(newdireccion) },
        success: function(data) {
          console.log(data);
          window.location.href = "/newdireccion.js";
        }
      });
    });
  };