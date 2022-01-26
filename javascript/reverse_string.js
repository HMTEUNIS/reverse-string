function reverseString(str) 
   
  {
    const arr= Array.from(str)
     let newArr = []
   
     for (let i = 0 ; i < arr.length ; i++){
    newArr.unshift(arr[i])
     }
     
     
     return newArr.join("")
   }



console.log(reverseString("tu"))

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
