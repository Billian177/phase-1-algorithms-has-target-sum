function hasTargetSum(array, target) {
  const values = {};

  for (const val of array) {
    // n steps
    const complement = target - val;
    if (complement in values) return true;
    values[val] = true;
  }

  return false;
}


/*function hasTargetSum(array, target) {
  
  // Write your algorithm here
  
    for (let i=0; i< array.length; i++) {
      
      const remain = Math.abs(target - array[i]);
      if (array.includes(remain)){
       return true;
      } else{
        return false;
      }
    }
}*/

/* 
  Write the Big O time complexity of your function here
  O(1)
*/

/* 
  Add your pseudocode here
  Write a function hasTargetSum
  It takes two parameters; an array and target number
    Sum the values of each pair in the array
      compare the pair-total to the target number
        return true if atleast one pair returns value equal to target 
*/

/*
  Add written explanation of your solution here

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
