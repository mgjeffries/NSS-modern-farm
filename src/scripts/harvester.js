export const harvestPlants = ( plants ) => {
  let harvest = []

  // TODO: give half or corn to cattle ranchers
  plants.forEach(plant => {
    for (let i=0; i < plant.output; i++) {
      harvest.push(plant)
    }
  });
  return harvest
}