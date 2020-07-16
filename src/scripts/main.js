import { createPlan } from './plan.js'
import { createAsparagus } from "./seeds/asparagus.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"


const yearlyPlan = createPlan()
console.log(yearlyPlan)


const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

addPlant(asparagusSeed)
let myPlants = usePlants()
console.log(myPlants)