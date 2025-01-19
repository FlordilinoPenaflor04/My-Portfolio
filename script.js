document.addEventListener("DOMContentLoaded", () => {
  // Get all the nav links
  const links = document.querySelectorAll(".nav-links");

  // Get the current page's URL and normalize it (strip directories and .html)
  const currentPage = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "")
    .toLowerCase();

  // Highlight the active link
  links.forEach((link) => {
    const linkHref = link
      .getAttribute("href")
      .split("/")
      .pop()
      .replace(".html", "")
      .toLowerCase();

    // If the link is the current page, set it as active
    if (currentPage === linkHref) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Handling certificate carousel
  const dots = document.querySelectorAll(".dot");
  const certificatesWrapper = document.querySelector(".certificates-wrapper");
  const certificateItems = document.querySelectorAll(".certificate-item");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  // Exit early if no certificate items are found
  if (certificateItems.length === 0) return;

  let intervalId;
  let currentIndex = 0;

  function updateActiveDot(index) {
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function showCertificate(index) {
    const itemWidth = certificateItems[0].offsetWidth + 20;
    certificatesWrapper.style.transform = `translateX(-${itemWidth * index}px)`;
    updateActiveDot(index);

    certificateItems.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });
  }

  /*
  function resetAutoSlide() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % certificateItems.length;
      showCertificate(currentIndex);
    }, 4500);
  }
  */

  // Add click events to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      showCertificate(currentIndex);
      // resetAutoSlide();
    });
  });

  // Add click events to arrows
  leftArrow.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + certificateItems.length) % certificateItems.length;
    showCertificate(currentIndex);
    // resetAutoSlide();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % certificateItems.length;
    showCertificate(currentIndex);
    // resetAutoSlide();
  });

  // Initialize the carousel
  showCertificate(currentIndex);

  /*
  // Start the auto-slide
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % certificateItems.length;
    showCertificate(currentIndex);
  }, 4500);
  */
});
