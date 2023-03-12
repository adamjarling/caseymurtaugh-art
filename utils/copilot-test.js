function calculateDaysBetweenDates(begin, end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const difference = endDate.getTime() - beginDate.getTime();
  const days = difference / (1000 * 3600 * 24);
  return days;
}

// find all images without alternate text and give them a red border
function findImagesWithoutAltText() {
  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    if (!image.alt) {
      image.style.border = "2px solid red";
    }
  });
}

// Express server on port 3000
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
