import { createSoybean } from "./seeds/soybean.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from './field.js'

export const plantSeeds = (totalPlan) => {
 totalPlan.forEach(row => {
   row.forEach(plant => {
     createSeedFromPlant(plant)
   })
 })  
}

const createSeedFromPlant = (plantString) => {
  switch(plantString) {
    case "Soybean":
      addPlant(createSoybean());
      break;
      
    case "Corn":
      addPlant(createCorn());
      break;
      
    case "Asparagus":
      addPlant(createAsparagus());
      break;

    case "Wheat":
      addPlant(createWheat());
      break;
      
    case "Potato":
      addPlant(createPotato());
      break;
      
    case "Sunflower":
      addPlant(createSunflower());
      break;
  }
}