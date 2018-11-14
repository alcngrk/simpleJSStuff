async function editIndividualElement(element) {
  return new Promise(async (resolve) => {   // Might consider adding reject argument to this.
    const tempElement = element;
    tempElement.fieldX = await doAsyncStuffX();
    tempElement.fieldY = await doAsyncStuffY();

    resolve(tempElement);
  });
}

async function populateArray(arrayToUse) {
  const populatedArray = arrayToUse.map(arrayElement => (
        editIndividualElement(arrayElement)));

  return Promise.all(populateArray);
}
