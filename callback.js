// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(found)

  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(i);   // execute callback
  //   }
  // }
}

function actionWhenFound(item, idx) {
  if (item === 'Waldo') {
    console.log("Found Waldo at index " + idx + "!");
  }
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);