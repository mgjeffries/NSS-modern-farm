const plantsInField = []

export const addPlant = (seed) => {
  // TODO: check if seed is an object or array using isArray method
  plantsInField.push(seed)
}

export const usePlants = () => plantsInField.slice()


