let themeStorage = localStorage.getItem("menuTheme") || "light";

const buttonEl = document.getElementById("toggle-theme");

if (themeStorage === "light") {
  document.body.classList.remove("dark");

  buttonEl.classList.add("light");
  buttonEl.classList.remove("dark");

} else if (themeStorage === "dark") {
  document.body.classList.add("dark");

  buttonEl.classList.remove("light");
  buttonEl.classList.add("dark");
}

function toggleTheme() {
  document.body.classList.toggle("dark");

  buttonEl.classList.toggle("light");
  buttonEl.classList.toggle("dark");

  switch (themeStorage) {
    case "light":
      themeStorage = "dark";
      break;

    case "dark":
      themeStorage = "light";
      break;

    default:
      themeStorage = "light";
      break;
  }

  localStorage.setItem("menuTheme", themeStorage);
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