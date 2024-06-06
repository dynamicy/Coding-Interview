function carFleet(target: number, position: number[], speed: number[]): number {
    let fleetCount = 0;
    let lastArrivalTime = 0;

    // Combine position and speed into a single array and sort by position in descending order
    const cars = position.map((pos, index) => [pos, speed[index]]);
    cars.sort((a, b) => b[0] - a[0]);

    // Iterate over each car's position and speed
    for (let [pos, spd] of cars) {
        const arrivalTime = (target - pos) / spd;
        // Check if the current car forms a new fleet
        if (arrivalTime > lastArrivalTime) {
            fleetCount++;
            lastArrivalTime = arrivalTime;
        }
    }
    return fleetCount;
}
