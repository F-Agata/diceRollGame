export const helpersFunctionMakeArrayResults = (setResultsToShow) => {
  const resultsArray = []

  console.log(localStorage)
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.getItem(i + 1)

    resultsArray.push(value)
  }

  setResultsToShow(resultsArray)
}
