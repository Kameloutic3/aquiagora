let menuMobile = document.querySelector('.menu-mobile');
let areaMenu = document.querySelector('.inf-menu-mobile');
let areaMenu2 = document.querySelector('.inf-area-mobile');
let areaInfor = document.querySelector('.sombra ');

menuMobile.addEventListener('click', ()=>{
   if(areaMenu.style.height == '100vh'){
        areaMenu2.style.display = 'none';
        areaInfor.style.display = 'block';
        areaMenu.style.display = 'none';
        areaMenu.style.height = '0';
   }else{
        areaMenu.style.display = 'flex';
        areaMenu2.style.display = 'block';
        areaInfor.style.display = 'none';
        areaMenu.style.height = '100vh';
   }
});

function WriteText(){
     let texto = document.querySelector('.p-me2');
     let array = texto.innerHTML.split('');
     texto.innerHTML = '';
     array.forEach((letra, index)=>{
          setTimeout(()=>{
               texto.innerHTML += letra;
          }, 60 * index);
     });
}

WriteText();





