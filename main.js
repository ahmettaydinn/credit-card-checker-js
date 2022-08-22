



function validateCred(numbers) {
  let numArr = numbers.join("").split("")
  let total = 0;
  for (let i = numArr.length - 1; i >= 0; i--) {
    let currValue = Number(numArr[i])
    if ((numArr.length - 1 - i) % 2 === 1) {
      currValue *= 2;
      if (currValue > 9) {
        currValue -= 9;
      }
    }
    total += currValue;
  }

  return total % 10 === 0;

}

function idInvalidCardCompanies(invalid_numbers) {
  let invalidBatch = invalid_numbers.join("").split("");
  const companies = [];

    switch (invalidBatch[0]) {
      case "3":
        if (companies.indexOf('amex') === -1) {
          companies.push('amex');
        }
        break
      case "4":
        if (companies.indexOf('visa') === -1) {
          companies.push('visa');
        }
        break
      case "5":
        if (companies.indexOf('mastercard') === -1) {
          companies.push('mastercard');
        }
        break
      case "6":
        if (companies.indexOf('discover') === -1) {
          companies.push('discover');
        }
        break
      default:
        console.log('Company not found');
    }
  return companies;
}



const getValueInput = () =>{
  let inputValue = document.getElementById("domTextElement").value; 
  let company = idInvalidCardCompanies([inputValue])
  let amex =  document.getElementById("amex")
  let mastercard =  document.getElementById("mastercard")
  let visa =  document.getElementById("visa")
  let discover =  document.getElementById("discover")

  if (inputValue.length == 0) {
    document.getElementById("valueInput").innerHTML = `There is no card❗`;
  } else if(validateCred([inputValue])) {
    
    document.getElementById("valueInput").innerHTML = `Your ${company} credit card is valid✅`;
    amex.hidden = true;
    mastercard.hidden = true;
    visa.hidden = true;
    discover.hidden = true;
    document.getElementById(company).hidden = false
  } else {
    amex.hidden = true;
    mastercard.hidden = true;
    visa.hidden = true;
    discover.hidden = true;
    document.getElementById(company).hidden = false
    document.getElementById("valueInput").innerHTML = `Your ${company} credit card is invalid❌`;

    
  }
   
  
}





let valid1 = 4539677908016808;
const valid2 = 5535766768751439;
const valid3 = [371612019985236];

const valid4 = [6011144340682905];
console.log(valid4.length)
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];


const invalid1 = [4532778771091795];
const invalid2 = [5795593392134643];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5382019772883854];


const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];




