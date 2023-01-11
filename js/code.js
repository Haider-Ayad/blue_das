// $(document).ready(function() {
//     $('#autoWidth').lightSlider({
//         autoWidth:true,
//         loop:true,
//         onSliderLoad: function() {
//             $('#autoWidth').removeClass('cS-hidden');
//         } 
//     });  
//   });


  //Scroll to Top
  let btnTop=document.querySelector(".btnTop");

  window.onscroll=function () {
    this.scrollY >=1000 ?btnTop.classList.add("show"):btnTop.classList.remove("show");
  };

  btnTop.onclick=function () {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
  };


    
  //toggle Active
  // function handellActive(ev) {
  //   ev.target.querySelectorAll(".active").forEach(ele=>{
  //     ele.classList.remove("active");
  //   })
  //   ev.target.classList.add("active");
  // }
    //scroll by link
    const allLinks=document.querySelectorAll(".navbar-nav a");
    function scrollToSomewhere(element) {
      element.forEach(ele => {
        ele.classList.remove("active");
        ele.addEventListener("click",(e)=>{
          e.preventDefault();
          document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
          })
        });
      });
    }
  
    scrollToSomewhere(allLinks);
    let li=document.querySelectorAll(".list li")
    let imgs=document.querySelectorAll(".shuffle > div");
  
    li.forEach((li)=>{
      li.addEventListener("click",manageImage);
    })

    function manageImage() {
      imgs.forEach((img)=>{
        img.style.display="none";
      }) ;
     document.querySelectorAll(this.dataset.filter).forEach((el)=>{
       el.style.display="block";
     });
    }

  
