var pegarCarrossel = window.document.getElementById("carrosselInformacoes");

  const swiper = new Swiper('.swiper', {
     speed: 400,
     spaceBetween: 100,
     slidesPerView: 5,
     loop: true,
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },

     pagination: {
         el: '.swiper-pagination',
     },

     scrollbars: {
         el: '.swiper-scrollbar',
         draggable: false,
     },

     breakpoints: {
         320: {
             slidesPerView: 1,

         },
         480: {
             slidesPerView: 2,

         },
         640: {
             slidesPerView: 3,

         },
         768: {
             slidesPerView: 4,

         },
         992: {
             slidesPerView: 5,

         },
         1200: {
             slidesPerView: 5,

         },
         1440: {
             slidesPerView: 7,
            spaceBetween: 1
        }
   },
});


var carrosselInformacoesJson = [
    { title: 'Rangnarok', foto: 'img/avatar1.png' },
    { title: 'Loki', foto: 'img/avatar2.png' },
    { title: 'One Piece', foto: 'img/avatar3.png' },
];


onload = init();

function init() {
    console.log(pegarCarrossel)
    for(var i=0;i < carrosselInformacoesJson.length ; i++){
        pegarCarrossel.innerHTML += `<div class="swiper-slide text-center">
              <div class="widthImg">
                <img src="img/EcoFone 2.png" alt="">
                <h4>Test<br>
                acessorios</h4>
                <p>Acessorios que acompanham junto com a caixa do celuluar</p>
              </div>
            </div>`
    };
}

window.addEventListener("scroll", function (){
    var headerHtml = window.document.querySelector('#header');
    headerHtml.classList.toggle('rolagem', window.scrollY > 0);
    console.log(window.scrollY);
});
