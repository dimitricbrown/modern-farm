console.log("Welcome to the main module")

import { Catalog } from "./catalog.js"
import { addPlant, usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"

// Chapter 1 Step------------
const yearlyPlan = createPlan()
console.log(yearlyPlan)

//Chapter 4 Step - Check Logic---------Moved here to keep consistency of code
plantSeeds(yearlyPlan)

// Chapter 2 Step - Check Logic-----------
// import { createAsparagus } from "./seeds/asparagus.js"

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

//Chapter 3 Step - Check Logic---------
//addPlant(asparagusSeed)
const plantsUsed = usePlants()
console.log(plantsUsed) // Also, Chapter 4 Step - Check Logic

//Chapter 5 Step - Check Logic---------
const harvested = harvestPlants(plantsUsed)
console.log(harvested)

//Chapter 6 Step - Check Logic---------
Catalog(harvested)