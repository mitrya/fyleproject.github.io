const gross_income = document.querySelector(".gross-income-input");
const extra_income = document.querySelector(".extra-income-input");
const deductions = document.querySelector(".deductions-input");
const age_group = document.getElementById("ageGroup");
const submit = document.querySelector("#calculate");


function validateInput(val)
{
    var x=val
    var regex=/^[0-9]+$/;
    if (x.match(regex))
    {
        return true;
    }
    return false;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("calculate");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.querySelector('.form').addEventListener("submit", (e) => {
    e.preventDefault();
    //   // Validate gross
    let isValid = true;

      if (!validateInput(gross_income.value)) {
        const elem = document.querySelector(".gross-income-error");
        elem.style.display = "inline";
        isValid =  false;
    }
    else
    {
        const elem = document.querySelector(".gross-income-error");
        elem.style.display = "none";

    }

    // Validate extra
    if(!validateInput(extra_income.value)) { 
        const elem = document.querySelector(".extra-income-error");
        elem.style.display = "inline";
        isValid =  false;
    }
    else
    {
        const elem = document.querySelector(".extra-income-error");
        elem.style.display = "none";

    }
    // Validate age group
    if (age_group.value==0) { 
        const elem = document.querySelector(".age-group-error");
        elem.style.display = "inline";
        isValid =  false;
    }
    else
    {
        const elem = document.querySelector(".age-group-error");
        elem.style.display = "none";

    }

    // Validate deduction
    if (!validateInput(deductions.value)) { 
        const elem = document.querySelector(".deduction-error");
        elem.style.display = "inline";
        isValid =  false;
    }
    else
    {
        const elem = document.querySelector(".deduction-error");
        elem.style.display = "none";

    }
    if(isValid)
        calculateResult()
    return isValid
  });

  function calculateResult()
  {
    let overAllIncome = parseInt(gross_income.value)+parseInt(extra_income.value)-parseInt(deductions.value)
    let resultElement = document.getElementById("result")

    if(overAllIncome<=800000)
    {
        // console.log(overAllIncome)
        resultElement.innerText=overAllIncome
    }
    else
    {
        let result = 0
        let taxableIncome = parseInt(overAllIncome-800000)
        switch (parseInt(age_group.value)) {
            case 1:
                result = overAllIncome*1.0 - (taxableIncome*3*1.0)/10
                break;
            case 2:
                result = overAllIncome*1.0 - (taxableIncome*4*1.0)/10
                break;
            case 3:
                result = overAllIncome*1.0 - (taxableIncome*1.0)/10
                break;

            default:
                break;
        }
        resultElement.innerText=result

    }
      modal.style.display = "block";

  }
  
  
