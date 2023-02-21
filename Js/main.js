
//animação walpapers
$('.walpaper').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '90px',
  variableWidth: true,
  adaptiveHeight: true,
  responsive:[{
    
      breakpoint: 1028,
      centerPadding: '40px',
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true


    },
    {
    
    breakpoint: 880,
  settings:{
    centerPadding: '30px',
  arrows: true,
  centerMode:true,
    slidesToShow: 3,
}
    },
    {
    breakpoint: 425,
    centerPadding: '0px',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true
    },
    {
    breakpoint: 375,
    settings:{
    centerPadding: '0px',
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true
    }
  },
  { 
    breakpoint: 320,
    settings:{
    centerPadding: '0px',
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true
    }

}]  




})
  
  
  //animação de pagina 

  const item = document.querySelectorAll("[data-anime]")

  const animeScroll= () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;

item.forEach((Element) => {
  if (windowTop > Element.offsetTop) {
    Element.classList.add("animate");
  } else{
    Element.classList.remove("animate");
  }
});
  
};

  animeScroll();

  window.addEventListener("scroll", ()=>{
    animeScroll();
  })

  const tabMenu = document.querySelectorAll("[data-tab='menusobre'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    tabMenu[1].classList.add("active");
    tabContent[1].classList.add("active");

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("active");
      });
      const direction = tabContent[index].dataset.anime;
      tabContent[index].classList.add("active", direction);

      tabMenu.forEach((content) => {
        content.classList.remove("active");
      });
      tabMenu[index].classList.add("active");
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }

  initMenuMobile();
  
  function initMenuMobile() {
    const menuButton = document.querySelector("[data-menu='button']");
    const menuList = document.querySelector("[data-menu='list']");

    menuButton.addEventListener('click', openMenu);

    function openMenu() {
        menuList.classList.toggle('active')
        menuButton.classList.toggle('active')
    }

}