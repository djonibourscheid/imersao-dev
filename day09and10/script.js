const buttonEl = document.getElementById("toggle-theme");

function toggleTheme() {
  document.body.classList.toggle("dark");

  buttonEl.classList.toggle("light");
  buttonEl.classList.toggle("dark");
}

window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  const windowHeight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

  let marginX;
  let marginY;

  if (windowWidth > 1800) {
    marginX = (windowWidth - 1440) / 2;
    buttonEl.style.right = `calc(${marginX}px + 1rem)`;
  } else {
    buttonEl.style.right = "";
  }

  if (windowHeight > 800) {
    marginY = (windowHeight - 655.5) / 2;
    buttonEl.style.top = `calc(${marginY}px + 1rem)`;
  } else {
    buttonEl.style.top = "";
  }
});