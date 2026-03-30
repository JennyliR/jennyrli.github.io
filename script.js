// script.js
function checkAccess() {
    const input = document.getElementById("passwordInput");
    const errorText = document.getElementById("errorMessage");
    const secretPassword = "youfindme";
  
    if (input.value === secretPassword) {
      window.location.href = "./project/"; 
    } else {
      errorText.classList.remove("hidden");
      input.classList.add("shake");
      
      setTimeout(() => {
        input.classList.remove("shake");
      }, 500);
  
      input.value = "";
      input.focus();
    }
  }