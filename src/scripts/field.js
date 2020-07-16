const plantsInField = []

export const addPlant = (seed) => {
  if (Array.isArray(seed)) {
    seed.forEach(subSeed => {
      plantsInField.push(subSeed)
    });
  }
  else {
    plantsInField.push(seed)
  }
}

export const usePlants = () => plantsInField.slice()


