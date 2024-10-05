//actualizacion de cada año
document.getElementById("year").textContent = new Date().getFullYear();

// Seleccionamos el checkbox dark
const toggle = document.getElementById('toggle');

toggle.addEventListener('change', function() {
    if (toggle.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
     }
});

//contactarme
function Contactarme(){
    Swal.fire({
        title: "Numero de contacto",
        text: "colombia #57 - 3025453611",
        imageUrl: "/images/hablar.png",
        imageWidth: 80,
        imageHeight: 80,
        imageAlt: "Custom image"
      });
}

//descargar curriculum

function curriculum(){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
}

//scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});