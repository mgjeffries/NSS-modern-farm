export const harvestPlants = ( plants ) => {
  let harvest = []

  plants.forEach(plant => {
    const cropPlants = Array(calculateYield(plant)).fill(plant)
    cropPlants.forEach(yieldPlant => {
      harvest.push(yieldPlant)
    })
  });
  return harvest
}

const calculateYield = ( plant ) => {
  // modifier for the number of corn plants that the ranchers eat
  let cattleRancherModifier = 1
  if (plant.type === "Corn") {
    cattleRancherModifier = .5
  }
  return plant.output * cattleRancherModifier
}