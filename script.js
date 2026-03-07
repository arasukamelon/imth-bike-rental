// Assuming the rest of the code is present above this and the required functionalities are imported

// Fix for Line 122: Using totalPrice.value instead of totalPrice
let amount = totalPrice.value;

// Code in between

// Fix for Line 270: Properly call updateBikeAvailability with data parameter
fetchData().then(data => {
    updateBikeAvailability(data);
});

// Added proper formatting: (This is exemplary; details depend on the existing code style)

const formattedAmount = parseFloat(amount).toFixed(2);
console.log(`Formatted amount: $${formattedAmount}`);