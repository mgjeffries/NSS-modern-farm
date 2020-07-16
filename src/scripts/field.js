const plantsInField = []

export const addPlant = (seed) => {

  // check for corn, which comes in as an array, rather than an object
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


