//icons
const sunIcon = document.getElementById("theme-toggle-light-icon");
const moonIcon = document.getElementById("theme-toggle-dark-icon");

console.log(sunIcon);

//theme variables
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

//icon Toggling
const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
}
//initial theme check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    
    return;
  }
  sunIcon.classList.add("display-none");
}

// manual theme switch

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")){
    document.documentElement.classList.remove("dark");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
}

// call theme switch on clicking buttons 
sunIcon.addEventListener("click", ()=> {
  themeSwitch();
})
moonIcon.addEventListener("click", ()=> {
  themeSwitch();
})

//invoke theme on initial load 
themeCheck();

