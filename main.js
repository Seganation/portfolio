// main.js

function copyToClipboard() {
  const textToCopy = "your@email.com"; // Replace with the actual email address

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
s