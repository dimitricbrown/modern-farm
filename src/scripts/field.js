const growingPlants = []

export const addPlant = (seed) => {
    // Comments below are to help test if my "Corn" array successfully passed or not.
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