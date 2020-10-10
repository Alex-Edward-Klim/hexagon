const alignHexagonElements = () => {

  // Array of hexagon elements
  const arr = Array.from(document.querySelectorAll(".hexagon__element"));

  // If count of hexagon elements in the hexagon container is more (>) than 1
  if (arr.length > 2) {

    // Array of <br> elements (there is a <br> element after each hexagon element)
    const br = Array.from(document.querySelectorAll(".hexagon__br"));
    // Array of hidden hexagon elements
    const hiddenHexagon = document.querySelector('.hexagon__hidden-element');

    // Always clean the hexagon container before each alignHexagonElements() run!
    br.map((elem) => elem.classList.add('hexagon__display-none'));
    hiddenHexagon.classList.add('hexagon__display-none');

    // Check if there are multiple rows in the hexagon container (default false)
    let multipleRows = false;

    // Number of elements in a single ODD row
    let elementsInOddRow = 0;
    // Number of elements in a single EVEN row
    let elementsInEvenRow = 0;

    let i = 2;
    while (i < arr.length) {
      if (arr[i].offsetTop > arr[i - 1].offsetTop) {
        elementsInEvenRow = i;
        elementsInOddRow = elementsInEvenRow - 1;
        multipleRows = true;
        i = arr.length;
      }
      i += 1;
    }

    if (multipleRows) {

      // Ignore the case when there are less than 3 total rows in the hexagon container
      if (arr.length >= elementsInOddRow + elementsInEvenRow) {
        for (let j = elementsInOddRow - 1; j < arr.length; j = j + elementsInEvenRow + elementsInOddRow) {
          arr[j].nextElementSibling.classList.remove("hexagon__display-none");
        }
      }

      // (SECTION)
      // Align the last row if necessary (by providing special hidden hexagon element at the end of the hexagon container)
      const oddEvenRowPairsCount = Math.floor(arr.length / (elementsInOddRow + elementsInEvenRow));

      // Number of elements in the last row (without oddEvenRowPairsCount)
      let remainingElementsCount;
      if (oddEvenRowPairsCount === 0) {
        remainingElementsCount = arr.length - elementsInOddRow - 1;
      } else {
        remainingElementsCount = arr.length % ((elementsInOddRow + elementsInEvenRow) * oddEvenRowPairsCount);
      }

      // If the last row is EVEN
      if (remainingElementsCount > elementsInOddRow) {
        const lastRowElementsCount = remainingElementsCount - elementsInOddRow;
        // If the count of hexagon elements in the LAST row has the same oddity/evenity or oddness/eveness as the count of hexagon elements in the LAST BUT ONE row
        if (
          (elementsInOddRow % 2) === (lastRowElementsCount % 2)
        ) {
          hiddenHexagon.classList.remove("hexagon__display-none");
        }
      } else if (remainingElementsCount > 0) // If the last row is ODD
        {
          // If the count of hexagon elements in the LAST row has the same oddity/evenity or oddness/eveness as the count of hexagon elements in the LAST BUT ONE row
          if (
            (elementsInEvenRow % 2) === (remainingElementsCount % 2)
            ) {
              hiddenHexagon.classList.remove("hexagon__display-none");
            }
      }
      // (SECTION)

    }

  }
};

window.addEventListener('resize', alignHexagonElements);

alignHexagonElements();
