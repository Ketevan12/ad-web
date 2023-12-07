document.addEventListener("DOMContentLoaded", function () {
    const mainTitle = document.querySelector(".main-header");
    const dailyText = document.querySelector(".daily-header");
    const dailyPhotos = document.querySelectorAll(".daily-photo");

    // Function to handle animations
    const handleAnimations = () => {
        // Hide "Routines?"
        mainTitle.style.animation = "fadeOutRoutines 6s forwards";

        // Show "Daily?" after "Routines?" fades out
        setTimeout(() => {
            dailyText.style.animation = "fadeOutDaily 10s ease forwards";
        }, 1000); // Adjust this delay as needed

        // Show images one by one after both "Routines?" and "Daily?" have faded out
        setTimeout(() => {
            dailyPhotos.forEach((photo, index) => {
                photo.style.animation = `fadeInPhoto 1s forwards ${index * 2}s`;
            });
        }, 5000); // Adjust this delay as needed
    };

    // Start the animations
    setTimeout(() => {
        handleAnimations();
    }, 500);
});
