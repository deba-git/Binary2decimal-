const form = document.querySelector("#binaryToDecimal");
form.addEventListener("submit", (event) => {
   event.preventDefault();
   const input = document.querySelector('[name="binary"]');
   const binaryNumber = input.value ;
//    console.log(typeof binaryNumber);
 let decimalNumber = parseInt(binaryNumber , 2) ;
  if (isNaN (decimalNumber) ) {
    alert("Please enter a valid Binary Number !")
  } else {
    const resultElement = document.querySelector('.result span');resultElement.innerText = decimalNumber ;
  }
} )
