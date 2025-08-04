const btns = document.querySelectorAll(".btn");
const cards = document.querySelectorAll(".card");

// set default "All" as active
document.querySelector('[data-category="All"]').classList.add("active");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    btns.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");

    cards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      // Remove all old states
      card.classList.remove("active");
      card.classList.remove("not-active");

      // Filter logic
      if (category === "All" || category === cardCategory) {
        card.classList.add("active");
      } else {
        card.classList.add("not-active");
      }
    });
  });
});
