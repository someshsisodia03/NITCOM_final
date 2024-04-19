const showButton = document.querySelector('.btn-toggle');
const hiddenDiv = document.querySelector(".btn-collapse");
showButton.addEventListener("click", function() {
    if (hiddenDiv.style.display === "none") {
      hiddenDiv.style.display = "block";
    } else {
      hiddenDiv.style.display = "none";
    }
  });