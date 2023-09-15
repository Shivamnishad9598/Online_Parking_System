// script.js
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    const locationInput = document.getElementById("location");
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");
    const resultsDiv = document.getElementById("results");

    searchButton.addEventListener("click", function () {
        const location = locationInput.value;
        const date = dateInput.value;
        const time = timeInput.value;

        // Simulate fetching parking spot data (replace with your logic)
        const parkingSpots = [
            { name: "Parking Lot A", available: true },
            { name: "Parking Lot B", available: false },
            { name: "Parking Lot C", available: true },
        ];

        // Display search results
        resultsDiv.innerHTML = "";
        parkingSpots.forEach(function (spot) {
            const spotDiv = document.createElement("div");
            spotDiv.className = "booking-spot";
            spotDiv.innerHTML = `
                <h3>${spot.name}</h3>
                <p>Status: ${spot.available ? "Available" : "Occupied"}</p>
                <button class="book-button" data-location="${location}" data-date="${date}" data-time="${time}" data-spot="${spot.name}">Book</button>
            `;
            resultsDiv.appendChild(spotDiv);
        });

        // Add event listeners to book buttons
        const bookButtons = document.querySelectorAll(".book-button");
        bookButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                const selectedLocation = button.getAttribute("data-location");
                const selectedDate = button.getAttribute("data-date");
                const selectedTime = button.getAttribute("data-time");
                const selectedSpot = button.getAttribute("data-spot");

                // Simulate booking (replace with your booking logic)
                const isBookingSuccessful = Math.random() < 0.5;

                if (isBookingSuccessful) {
                    alert(`Booking for ${selectedSpot} on ${selectedDate} at ${selectedTime} is confirmed.`);
                } else {
                    alert(`Sorry, ${selectedSpot} is no longer available.`);
                }
            });
        });
    });
});
