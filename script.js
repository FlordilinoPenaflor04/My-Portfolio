document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dot");
  const certificatesWrapper = document.querySelector(".certificates-wrapper");
  const certificateItems = document.querySelectorAll(".certificate-item");

  let intervalId; // To store the interval ID for clearing and restarting

  // Function to update the active dot
  function updateActiveDot(index) {
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  // Function to handle the display of the corresponding certificate image
  function showCertificate(index) {
    const itemWidth = certificateItems[0].offsetWidth + 20; // Including the gap between items
    certificatesWrapper.style.transform = `translateX(-${itemWidth * index}px)`; // Scroll to the corresponding image
    updateActiveDot(index);

    certificateItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add("active"); // Show the clicked item
      } else {
        item.classList.remove("active"); // Hide other items
      }
    });
  }

  // Add click event listeners to each dot
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      // Show the clicked certificate and reset automatic interval
      showCertificate(index);

      // Clear the existing interval and restart it from the clicked index
      clearInterval(intervalId);
      currentIndex = index;

      // Restart the automatic interval with the updated index
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % certificateItems.length; // Loop back to the first item after the last one
        showCertificate(currentIndex);
      }, 3000); // Change every 3 seconds (3000ms)
    });
  });

  // Initialize the first dot as active and display the first image
  let currentIndex = 0;
  showCertificate(0);

  // Automatically switch to the next certificate every 3 seconds
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % certificateItems.length; // Loop back to the first item after the last one
    showCertificate(currentIndex);
  }, 3000); // Change every 3 seconds (3000ms)
});
