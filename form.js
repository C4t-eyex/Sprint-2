document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-registro").addEventListener('submit', checkNombre); 
  });
  
  function checkNombre(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('Error. Campo vacío');
      return;
    }
    if(nombre.length < 4 || nombre.length > 30) {
        alert('Error. Longitud entre 4 y 30 caracteres');
        return;
      }
    if (!/^[a-zA-Z]*$/g.test(nombre)) {
        alert("Error. Ingrese solo letras");
        nombre.focus();
        return false;
    }
  }
