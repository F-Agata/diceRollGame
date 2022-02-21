export const helpersFunctionMakeArrayResults = (setResultsToShow) => {
    let resultsArray = [];

    console.log(localStorage)
    for (let i = 0; i < localStorage.length; i++) {
        // let key = localStorage.key(i);
        // let value = localStorage.getItem(key);
        let value = localStorage.getItem(i+1);

        resultsArray.push(value);
    };

    // console.log('resultsArray', resultsArray)
    setResultsToShow(resultsArray)
}