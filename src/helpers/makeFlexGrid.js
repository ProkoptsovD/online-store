/**
 * @param {Object} obj //obj with margins, gap and number of elements in row
 * @returns {String} /string of CSS rules
 */
export const makeFlexGrid = ({gap, elementsInRow}) => {
    return `
        display: flex;
        flex-wrap: wrap;
        margin: calc(-1 * ${gap});
    
        & > li {
            flex-basis: calc((100% - ${elementsInRow * 2} * ${gap}) / ${elementsInRow});
            margin: ${gap};
        }
    `;
}