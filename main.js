window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(el=>{
    const pos = el.getBoundingClientRect().top;
    if(pos < window.innerHeight){
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
    }
  });
});
