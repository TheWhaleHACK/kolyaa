'use strict'

let animItems = document.querySelectorAll('.anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll', ScrollAnim);
  function ScrollAnim(){
      for(let i=0;i<animItems.length;i++){
          const animItem=animItems[i];
          const animItemHeight=animItem.offsetHeight;
          const animItemOffset=offset(animItem).top;
          const animStart=1;

          let animItemPoint= window.innerHeight - animItemHeight / animStart;
          if(animItemHeight>window.innerHeight){
            animItemPoint= window.innerHeight - window.innerHeight / animStart;
          }

          if((pageYOffset>animItemOffset-animItemPoint) && pageYOffset<(animItemOffset+animItemPoint)){
              animItem.classList.add('active');
          }
          else{
              //anim-no-hide
              if(!animItem.classList.contains('anim-no-hide')){
            animItem.classList.remove('active');
              }
          }
      }
  }

  function offset(el){
      const rect=el.getBoundingClientRect(),
        scrollLeft=window.pageXOffset||document.documentElement.scrollLeft,
        scrollTop=window.pageYOffset||document.documentElement.scrollTop;
    return { top: rect.top+scrollTop,left: rect.left+scrollLeft}
  }

  setTimeout(()=>{
    ScrollAnim();
  },300);


}