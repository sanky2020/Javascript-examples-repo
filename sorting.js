var numbers = [12, 10, 15, 11, 14, 13, 16];

function sorting(arr) {
  let finish = false;
  while (!finish) {
    finish = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        finish = false;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  // (return arr) will be a sorted array in ascending manner
  return arr.filter((item) => {
    return item % 2;
  });
}
console.log(sorting(numbers));
