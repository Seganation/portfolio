function copyToClipboard() {
  const textToCopy = "Trojan-Horse.exe" ; // Replace with the actual email address

  const tempInput = document.createElement("input");
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  const copyContainer = document.querySelector(".copy-container");

  copyContainer.classList.add("clicked");

  setTimeout(function() {
    copyContainer.classList.remove("clicked");
  }, 2000);
}



let isDarkMode = false;

function darkMode() {
  isDarkMode = !isDarkMode;

  // Toggle between dark and light mode icons
  const darkModeIcon = document.getElementById("darkModeIcon");
  const lightModeIcon = document.getElementById("lightModeIcon");

  if (isDarkMode) {
    document.body.style.backgroundColor = "#142B50";
    darkModeIcon.style.display = "inline";
    lightModeIcon.style.display = "none";
    // Add your dark mode styles or functionality here
  } else {
    document.body.style.backgroundColor = "whitesmoke";
    darkModeIcon.style.display = "none";
    lightModeIcon.style.display = "inline";
    
    // Add your light mode styles or functionality here
  }
}