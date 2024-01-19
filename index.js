const bubbleMaker = () => {

  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);
  
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  // Evenement au click qui supprime une bulle
  bubble.addEventListener("click", () => {
    bubble.remove();
  })
  
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  // Timer qui fait que la bulle ce supprime au bout de 8 secondes
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 1000);

