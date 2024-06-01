

function flattenAndSort(array) {
    // Use reduce to flatten the nested array into a single array
    const flattenedArray = array.reduce((acc, curr) => acc.concat(curr), []);

    // Use sort to sort the flattened array in ascending order
    return flattenedArray.sort((a, b) => a - b);
}
const nestedArray = [[3, 8, 1], [4, 9, 8], [6, 0, 5]];
console.log(flattenAndSort(nestedArray));