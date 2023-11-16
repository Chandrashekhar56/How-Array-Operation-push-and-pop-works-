var elementsArray = [];
var total_number = "";

function push_op() 
{
    total_number = document.getElementById('input_total_number').value;
    document.querySelector('input[id="input_total_number"]').disabled = true;

    if (total_number !== "" && total_number > 0)
    {
        if (elementsArray.length >= total_number)
        {
            alert("Array is already full");
            document.querySelector('button[onclick="push_op()"]').disabled = true;
            return;
        }

        var inputValue = prompt("Enter number");
        if(inputValue!=="" && inputValue!==null)
        {
            elementsArray.push(inputValue);
            updateDisplay();
        }
        else
        {
            alert("Please enter any number");
        }
    }
    else 
    {
        alert("Please enter valid total number of array");
    }
}

function pop_op() 
{
    if(elementsArray.length!==0)
    {
        elementsArray.pop();
        document.querySelector('button[onclick="push_op()"]').disabled = false;
        document.querySelector('input[id="input_total_number"]').disabled = true;
        updateDisplay();
    }
    else
    {
        alert("Array is already empty");
    }
}

function updateDisplay() 
{
    var containerDiv = document.getElementById('array');
    containerDiv.innerHTML = "";
    for (var i = 0; i < elementsArray.length; i++) 
    {   
        var newDiv = document.createElement('div');
        newDiv.textContent = elementsArray[i];
        newDiv.className = 'array-item';
        containerDiv.appendChild(newDiv);
        containerDiv.style.backgroundColor='black';
        containerDiv.style.border='3px solid yellow ';
    }
    
    if(elementsArray.length<1)
    {
        containerDiv.style.backgroundColor='white';
        containerDiv.style.border='3px solid white';
    }
}