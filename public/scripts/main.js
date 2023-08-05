const carousel = {
    run: function() {
      $(".feature:gt(0)").hide();
      setInterval(function() {
        $(".feature:first")
          .fadeOut(1000)
          .next()
          .fadeIn(1000)
          .end()
          .appendTo(".carousel");
      }, 5000);
    }
  };
  carousel.run();

  // Function to get the current date and time
function getCurrentDateAndTime() {
  const dateTime = new Date();
  return dateTime.toLocaleString();
}

// Target an HTML element to display the current date and time
const dateDisplay = document.getElementById("date-container");

// Set the innerHTML of the element to the current date and time returned by the function
dateDisplay.innerHTML = getCurrentDateAndTime();