import { createPlan } from './plan.js'
import { createAsparagus } from "./seeds/asparagus.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"



const yearlyPlan = createPlan()
console.log(yearlyPlan)

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

addPlant(asparagusSeed)
let myPlants = usePlants()
console.log(myPlants)

const harvest = harvestPlants(myPlants)
console.log(harvest)