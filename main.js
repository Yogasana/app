document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const arrowIcons = document.querySelectorAll(".bx-chevron-down");

    arrowIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            const answer = this.parentElement.querySelector(".answer");

            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const arrowIcons = document.querySelectorAll(".bx-chevron-down");

    arrowIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            const answer = this.parentElement.nextElementSibling;

            if (answer.style.display === "block") {
                answer.style.display = "none";
                this.parentElement.parentElement.style.height = "40px"; // Adjust the width when collapsing
            } else {
                answer.style.display = "block";
                this.parentElement.parentElement.style.height = "120px"; // Adjust the width when expanding
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const hindiButton = document.getElementById("hindi-button");
    const englishButton = document.getElementById("english-button");
    const videoSource = document.getElementById("video-source");

    hindiButton.addEventListener("click", function () {
        // Change the video source to the Hindi version
        videoSource.src = "Improve Your Digestion With Padmastask - Sanyukt Asana.mp4";
        // Reload the video player with the new source
        document.getElementById("custom-video").load();
    });

    englishButton.addEventListener("click", function () {
        // Change the video source to the English version
        videoSource.src = "Indigestion.mp4";
        // Reload the video player with the new source
        document.getElementById("custom-video").load();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const hindiButton = document.getElementById("hindi-button-s");
    const englishButton = document.getElementById("english-button-s");
    const videoSource = document.getElementById("custom-video-s");

    hindiButton.addEventListener("click", function () {
        // Change the video source to the Hindi version
        videoSource.src = "eye.mp4";
        // Reload the video player with the new source
        document.getElementById("custom-video-s").load();
    });

    englishButton.addEventListener("click", function () {
        // Change the video source to the English version
        videoSource.src = "eyeEng.mp4";
        // Reload the video player with the new source
        document.getElementById("custom-video-s").load();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const hindiButton = document.getElementById("hindi-button-w");
    const englishButton = document.getElementById("english-button-w");
    const videoSource = document.getElementById("custom-video-w");

    hindiButton.addEventListener("click", function () {
        // Change the video source to the Hindi version
        videoSource.src = "b1.mp4";
        // Reload the video player with the new source
        document.getElementById("custom-video-w").load();
    });

    englishButton.addEventListener("click", function () {
        // Change the video source to the English version
        videoSource.src = "b1eng.mp4";
        // Reload the video player with the new source
        document.getElementById("custom-video-w").load();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const hindiButton = document.getElementById("hindi-button-sh");
    const englishButton = document.getElementById("english-button-sh");
    const videoSource = document.getElementById("custom-video-sh");

    hindiButton.addEventListener("click", function () {
        // Change the video source to the Hindi version
        videoSource.src = "sh.mp4";
        // Reload the video player with the new source
        document.getElementById("custom-video-sh").load();
    });

    englishButton.addEventListener("click", function () {
        // Change the video source to the English version
        videoSource.src = "sheng.mp4";
        // Reload the video player with the new source
        document.getElementById("custom-video-sh").load();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const hindiButton = document.getElementById("hindi-button-h");
    const englishButton = document.getElementById("english-button-h");
    const videoSource = document.getElementById("custom-video-h");

    hindiButton.addEventListener("click", function () {
        // Change the video source to the Hindi version
        videoSource.src = "hal.mp4";
        // Reload the video player with the new source
        document.getElementById("custom-video-h").load();
    });

    englishButton.addEventListener("click", function () {
        // Change the video source to the English version
        videoSource.src = "haleng.mp4";
        // Reload the video player with the new source
        document.getElementById("custom-video-h").load();
    });
});
// Check if the browser supports service workers
if ('serviceWorker' in navigator) {
  // Listen for the "load" event to ensure all resources are loaded
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });

  // Listen for the "beforeinstallprompt" event to prompt for installation
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the browser's default installation prompt
    e.preventDefault();

    // Store the event for later use
    deferredInstallPrompt = e;

    // Show a custom install button or banner
    // For example, you can display a button with an "Install App" label
    installButton.style.display = 'block';

    // Attach an event listener to the custom install button
    installButton.addEventListener('click', () => {
      // Show the browser's installation prompt when the custom button is clicked
      deferredInstallPrompt.prompt();

      // Wait for the user to respond to the prompt
      deferredInstallPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the PWA installation');
        } else {
          console.log('User declined the PWA installation');
        }

        // Reset the deferred prompt variable
        deferredInstallPrompt = null;

        // Hide the custom install button
        installButton.style.display = 'none';
      });
    });
  });
}
