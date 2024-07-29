function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let dibujo = document.getElementById("dibujo");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Bien hecho, lograste encriptar el Texto ";
    parrafo.textContent = "Intentalo de nuevo";
    dibujo.src = "./img/encriptado.jpg";
  } else {
    dibujo.src = "./img/pensador.jpg";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert('Debes ingresar el texto que quieres encriptar');
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let dibujo = document.getElementById("dibujo");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Fabuloso lograste desencriptar el texto";
      parrafo.textContent = "Eres un ganador";
      dibujo.src = "./img/desencriptado.jpg";
    } else {
      dibujo.src = "./img/pensador.jpg";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      alert('Debes ingresar el texto que quieres desencriptar');
    }
}

function copiarTexto(){
  let textarea = document.getElementById("texto");
  textarea.select();
  textarea.setSelectionRange(0, 99999); 
  document.execCommand('copy');
  alert("Se ha copiado el texto al portapapeles")
}
