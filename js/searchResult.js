document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search_input input");
  const boxResult = document.querySelector(".box_result");

  searchInput.addEventListener("input", (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      boxResult.classList.add("active");
    } else {
      boxResult.classList.remove("active");
    }
  });
});
