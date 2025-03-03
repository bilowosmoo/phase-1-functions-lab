// Function to calculate the number of blocks from Scuber's headquarters (42nd Street)
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

// Function to calculate the number of feet from Scuber's headquarters
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

// Function to calculate the number of feet traveled
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

// Function to calculate fare price based on the traveled distance
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare for distances between 2000 and 2500 feet
    } else {
        return 'cannot travel that far'; // More than 2500 feet is not allowed
    }
}

// Example test cases
console.log(distanceFromHqInBlocks(50)); // 8
console.log(distanceFromHqInFeet(50)); // 2112
console.log(distanceTravelledInFeet(34, 38)); // 1056
console.log(calculatesFarePrice(34, 38)); // 13.12
console.log(calculatesFarePrice(34, 32)); // 0
console.log(calculatesFarePrice(34, 45)); // 25
console.log(calculatesFarePrice(34, 60)); // 'cannot travel that far'