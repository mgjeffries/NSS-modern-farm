import { createPlan } from './plan.js'
import { createAsparagus } from "./seeds/asparagus.js"
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"


// log plan
const yearlyPlan = createPlan()
console.log(yearlyPlan)

// log seed
const asparagusSeed = createAsparagus()
console.log(asparagusSeed)


// log field
plantSeeds(yearlyPlan)
let myPlants = usePlants()
console.log(myPlants)


const harvest = harvestPlants(myPlants)
console.log(harvest)