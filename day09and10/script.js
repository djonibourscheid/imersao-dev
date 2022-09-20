function toggleTheme() {
  document.body.classList.toggle("dark");

  const buttonEl = document.getElementById("toggle-theme");
  buttonEl.classList.toggle("light");
  buttonEl.classList.toggle("dark");
}