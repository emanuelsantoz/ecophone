var pegarCarrossel = window.document.getElementById("carrosselInformacoes");


function init() {
    for(var i=0;i > carrosselInformacoesJson.length ; i++){
        
    }
}

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
             slidesPerView: 6,

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


