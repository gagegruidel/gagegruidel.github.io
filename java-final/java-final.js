const questions = document.getElementById("questions"); //div elements for body of webpage to go through js functions
const results = document.getElementById("answer");
let userAnswers = [];

for (let i = 0; i < 10; i++) //generates the 10 questions asking if each digit is in the users phone number, along with the checkbox for each question
{ 
    const question = document.createElement("p");
    const input = document.createElement("input");

    question.textContent = `Is the number ${i} in your phone number?`; //question for form part of webpage

    input.type = "checkbox"; 
    input.name = `number${i}`;

    questions.appendChild(question); //appended to questions div
    questions.appendChild(input);
}

function genPhoneNumber() //function for the answer div to take the users checked answers and randomly generate a phone number from the selected user numbers along with a yes or no button for the user
{
    userAnswers = [];

    for (let i = 0; i < 10; i++) 
    {
        const checkbox = document.querySelector(`input[name=number${i}]`);
        userAnswers.push(checkbox.checked); //useranswers for the function to continue
        checkbox.checked = false;
    }

    const phoneNumber = genRandPhoneNumber(userAnswers); //generates the random phone number from the genRandPhone Number function for the user to see if its there phone number with accompanying buttons

    results.innerHTML = ""; 

    const pElement = document.createElement("p"); //text content and phone number
    pElement.textContent = `Your Phone Number: ${phoneNumber}`;
    results.appendChild(pElement);

    const yButton = document.createElement("button"); //yes button
    yButton.textContent = "Yes";
    yButton.onclick = () => checkPhoneNumber(phoneNumber);
    results.appendChild(yButton);

    const nButton = document.createElement("button"); //no button
    nButton.textContent = "No";
    nButton.onclick = noRetry;
    results.appendChild(nButton);
}

function noRetry() 
{
    results.innerHTML = "";

    const retryMessage = document.createElement("p");
    retryMessage.textContent = "Please enter your phone number again.";
    results.appendChild(retryMessage);
}

function genRandPhoneNumber(answers) //this function generates the phone number from the checked boxes by the user
{ 
    const possNumbers = answers.reduce((count, current, index) => {
        if (current) 
        {
            count.push(index);
        }

        return count;

    }, []);

    let phoneNumber = '';

    for (let i = 0; i < 10; i++) 
    {
        const randIndex = Math.floor(Math.random() * possNumbers.length); //random number generated from possNumbers and if statement
        phoneNumber += possNumbers[randIndex];
    }

    return phoneNumber;
}

function checkPhoneNumber(genPhoneNumber) { //checks to see if the number generated is the correct phone number of the user, if so thank you message for entering their phone number and if not then returns to genPhoneNumber function
    const userResponse = confirm(`Is ${genPhoneNumber} your phone number?`);

    if (userResponse) 
    { //if statement for users response to see if its correct number for thank you message
        results.innerHTML = "";
        const thanks = document.createElement("p");
        thanks.textContent = "Thank you for entering your Phone Number!";
        results.appendChild(thanks);
    } else { //returns to genPhoneNumber function
        noRetry();
    }
}
