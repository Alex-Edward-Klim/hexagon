const hexagonContainer = document.querySelector('.hexagon__container');

// (SECTION)
let hexagonWidth = window.getComputedStyle(hexagonContainer).getPropertyValue('--hexagon-image__width');
// E.g.: "200px" (String)
hexagonWidth = +hexagonWidth.slice(0, hexagonWidth.length - 2);
// E.g.: 200 (Number)
const hexagonElementHeight = Math.ceil( (hexagonWidth/2) / (Math.sqrt(3)/2) );
// E.g.: 116 (Number)
hexagonContainer.style.setProperty('--hexagon-element__height', hexagonElementHeight + "px");
// (SECTION)

// (SECTION)
let hexagonHeight = window.getComputedStyle(hexagonContainer).getPropertyValue('--hexagon-image__height');
// E.g.: "400px" (String)
hexagonHeight = +hexagonHeight.slice(0, hexagonHeight.length - 2);
// E.g.: 400 (Number)
const hexagonOuterWrapperMarginTop = -(hexagonHeight - hexagonWidth - hexagonElementHeight);
// E.g.: -84 (Number)
hexagonContainer.style.setProperty('--hexagon-outer-wrapper__margin-top', hexagonOuterWrapperMarginTop + "px");
// (SECTION)

// (SECTION)
const hexagonContainerPaddingTop = Math.floor(hexagonElementHeight / 2);
// E.g.: 58 (Number)
hexagonContainer.style.setProperty('--hexagon-container__padding-top', hexagonContainerPaddingTop + "px");

const hexagonWrapperMarginTop = -hexagonContainerPaddingTop;
// E.g.: -58 (Number)
hexagonContainer.style.setProperty('--hexagon-wrapper__margin-top', hexagonWrapperMarginTop + "px");
// (SECTION)

// (SECTION)
const hexagonWrapperHeight = hexagonHeight - ( (-(hexagonOuterWrapperMarginTop)) * 2);
// E.g.: 232 (Number)
hexagonContainer.style.setProperty('--hexagon-wrapper__height', hexagonWrapperHeight + "px");
// (SECTION)
