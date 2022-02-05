export const growingPlants = []

export const addPlant = (seed) => {
    // if (Array.isArray(seed)) {
    //     console.log("Corn is an array!")
    // } else {
        growingPlants.push(seed)
//      console.log("This seed is growing!")
//     }
}

export const usePlants = () => {
    return growingPlants
}