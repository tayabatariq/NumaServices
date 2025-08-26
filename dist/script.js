  const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-full");
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
    });