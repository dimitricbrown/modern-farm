export const harvestPlants = (growingPlants) => {

    let harvestResults = [];

    for (const grown of growingPlants) {
        if (grown.type === "Corn") {
            for (let i = 0; i < grown.output / 2; i ++){
                harvestResults.push(grown)
            }
        } else {
            for (let i =0; i < grown.output; i ++){
                harvestResults.push(grown)
            }
        }
    }
    return harvestResults
}