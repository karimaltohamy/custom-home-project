const svgCreativeOnePaths = document.querySelectorAll(
  "#svg_creative_one g path"
);
const svgCreativeTwoPaths = document.querySelectorAll(
  "#svg_creative_two g path"
);
// Get the position of the section
function getSectionPosition(sectionId) {
  let section = document.getElementById(sectionId);
  let rect = section.getBoundingClientRect();
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let sectionPosition = rect.top + scrollTop;

  return sectionPosition;
}

// Example usage
var sectionId = "creative_section"; // Replace with the ID of your section
var sectionPosition = getSectionPosition(sectionId);
console.log("Section position:", sectionPosition);

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= sectionPosition - 100) {
    svgCreativeOnePaths.forEach((path) => {
      path.classList.add("svg_animation");
    });
    svgCreativeTwoPaths.forEach((path) => {
      path.classList.add("svg_animation");
    });
  } else {
    svgCreativeOnePaths.forEach((path) => {
      path.classList.remove("svg_animation");
    });
    svgCreativeTwoPaths.forEach((path) => {
      path.classList.remove("svg_animation");
    });
  }
});
