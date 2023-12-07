document.addEventListener("DOMContentLoaded", function () {
    const mainTitle = document.querySelector(".main-header");
    const dailyText = document.querySelector(".daily-header");
    const monthlyText = document.querySelector(".monthly-header");
    const dailyPhotos = document.querySelectorAll(".daily-photo");
    const monthlyPhotos = document.querySelectorAll(".monthly-photo");
    

    // Function to handle animations
    const handleAnimations = () => {
        // Hide "Routines?"
        mainTitle.style.animation = "fadeOutRoutines 6s forwards";
// Update the total duration based on your actual timing for daily photos
const totalDailyPhotosDuration = 25;

setTimeout(() => {
    monthlyText.style.animation = "fadeInMonthly 40s forwards";
}, totalDailyPhotosDuration);

        // Show "Daily?" after "Routines?" fades out
        setTimeout(() => {
            dailyText.style.animation = "fadeOutDaily 13s ease forwards";
        }, 1000);

        // Show daily images one by one after both "Routines?" and "Daily?" have faded out
        setTimeout(() => {
            dailyPhotos[0].style.animation = "fadeInPhoto 10s forwards";
        }, 3000);

        setTimeout(() => {
            dailyPhotos[1].style.animation = "fadeInPhoto 10s forwards";
        }, 5000);

        setTimeout(() => {
            dailyPhotos[2].style.animation = "fadeInPhoto 10s forwards";
        }, 7000);

        setTimeout(() => {
            dailyPhotos[3].style.animation = "fadeInPhoto 10s forwards";
        }, 7000);

        // Fade out "Daily?" after daily images have appeared
        setTimeout(() => {
            dailyText.style.animation = "fadeOutDaily 10s ease forwards";
        }, 10000);

        // Show "Monthly?" after "Daily?" fades out
        setTimeout(() => {
            monthlyText.style.animation = "fadeInMonthly 10s forwards";
        }, 1000);
    }
        // Show monthly images after "Monthly?" has appeared
        setTimeout(() => {
            monthlyPhotos.style.animation = "fadeInMonthlyPhoto 25s forwards";
        }, 20000);
        setTimeout(() => {
            monthlyPhotos[1].style.animation = "fadeInMonthlyPhoto 30s forwards";
        }, 15000);
  
    // Start the animations
    setTimeout(() => {
        handleAnimations();
    }, 500);
});
