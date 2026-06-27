const images = document.querySelectorAll(".img");

const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{

    const category = btn.dataset.filter;

    images.forEach(img=>{
      if(category === "all" || img.dataset.cat === category){
        img.style.display="block";
      } else {
        img.style.display="none";
      }
    });

  });
});
