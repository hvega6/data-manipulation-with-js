const totalDistance = 1500; // miles
const fuelBudget = 175; // dollars
const fuelCostPerGallon = 3; // dollars

const fuelEfficiency = {
    55: 30, // mpg
    60: 28,
    75: 23
};

for (const speed in fuelEfficiency) {
    const mpg = fuelEfficiency[speed];
    const gallonsNeeded = totalDistance / mpg;
    const totalCost = gallonsNeeded * fuelCostPerGallon;
    const tripTime = totalDistance / speed;

    console.log(`At ${speed} mph:`);
    console.log(`Gallons needed: ${gallonsNeeded.toFixed(2)}`);
    console.log(`Total cost: $${totalCost.toFixed(2)}`);
    console.log(`Trip time: ${tripTime.toFixed(2)} hours`);
    console.log(`Budget sufficient: ${totalCost <= fuelBudget}`);
}
