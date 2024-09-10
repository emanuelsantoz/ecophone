window.addEventListener("scroll", function (){
    var headerHtml = window.document.querySelector('#header');
    headerHtml.classList.toggle('rolagem', window.scrollY > 0);
    console.log(window.scrollY);
});


document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // Remove a classe quando sair da tela
        }
      });
    }, {
      threshold: 0.1 // 10% do elemento visível
    });
  
    fadeElements.forEach(element => {
      observer.observe(element);
    });
  });


  function comprar(){
    return Swal.fire({
      title: "Por favor, informe seu email para contato",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
        
      },
      showCancelButton: true,
      confirmButtonText: "Enviar",
      showLoaderOnConfirm: true,
      preConfirm: async (text) => {
        if(text){
          Swal.fire({
            title: "Sucesso",
            text: "Em até um dia útil estaremos entrando em contato",
            icon: "success"
          });
        }
      }
    });
  };