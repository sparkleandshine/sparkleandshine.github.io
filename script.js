function calculateQuote() {
    // Get selected service
    const service = document.getElementById("service").value;
    // Get selected car size
    const size = document.getElementById("size").value;

    // Define base prices for the services
    const prices = {
        exterior: { small: 30, medium: 40, large: 50 },
        interior: { small: 60, medium: 80, large: 110 },
        complete: { small: 85, medium: 110, large: 150 }
    };

    // Check if the user selected both service and car size
    if (!service) {
        document.getElementById("quoteResult").innerText = "Please select a service.";
        return;
    }
    if (!size) {
        document.getElementById("quoteResult").innerText = "Please select a car size.";
        return;
    }

    // Get the base price based on the selected service and car size
    const basePrice = prices[service][size];

    // Display the result
    document.getElementById("quoteResult").innerText = `Estimated Price: $${basePrice}`;
}