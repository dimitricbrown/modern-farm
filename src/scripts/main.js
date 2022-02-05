console.log("Welcome to the main module")

import { addPlant, usePlants } from "./field.js"
import { createPlan } from "./plan.js"
import { createCorn } from "./seeds/corn.js"
import { plantSeeds } from "./tractor.js"


const yearlyPlan = createPlan()
console.log(yearlyPlan)

// import { createAsparagus } from "./seeds/asparagus.js"

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// addPlant(asparagusSeed)
// const plantsUsed = usePlants()
// console.log(plantsUsed)

const testArray = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]

plantSeeds(testArray)