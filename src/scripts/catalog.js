export const catalog = (foodObjects) => {
  const contentTarget = document.querySelector(".messages")
  foodObjects.forEach(foodObject => {
    contentTarget.innerHTML += `
    <section class="plant green">${foodObject.type}
    `
  })
}