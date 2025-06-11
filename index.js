 const icon = document.getElementById("alertIcon");
 const alertBox = document.getElementById("customAlert");

    let alertVisible = false;
    let alertTimeout;

    icon.addEventListener("click", () => {
      if (!alertVisible) {
        alertBox.classList.remove("slide-out");
        alertBox.classList.add("slide-in");
        alertBox.style.display = "block";
        icon.classList.remove("blinking-icon");
        alertVisible = true;

        alertTimeout = setTimeout(() => {
          alertBox.classList.remove("slide-in");
          alertBox.classList.add("slide-out");

          setTimeout(() => {
            alertBox.style.display = "none";
            icon.classList.add("blinking-icon");
            alertVisible = false;
          }, 500);
        }, 2000);
      }
    });
