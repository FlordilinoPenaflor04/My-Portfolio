document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dot");
  const certificatesWrapper = document.querySelector(".certificates-wrapper");
  const certificateItems = document.querySelectorAll(".certificate-item");

  let intervalId; 


  function updateActiveDot(index) {
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }


  function showCertificate(index) {
    const itemWidth = certificateItems[0].offsetWidth + 20; 
    certificatesWrapper.style.transform = `translateX(-${itemWidth * index}px)`; 
    updateActiveDot(index);

    certificateItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add("active"); 
      } else {
        item.classList.remove("active"); 
      }
    });
  }

  
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      
      showCertificate(index);

      
      clearInterval(intervalId);
      currentIndex = index;

   
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % certificateItems.length; 
        showCertificate(currentIndex);
      }, 4500); 
    });
  });

 
  let currentIndex = 0;
  showCertificate(0);


  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % certificateItems.length; 
    showCertificate(currentIndex);
  }, 4500); 
});
