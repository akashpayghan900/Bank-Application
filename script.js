let accountNumber = 0;
let amount = 0;

function displayMessage(msg) {
    document.getElementById('message').innerText = msg;
}

function createAccount() {
    if (accountNumber !== 0) {
        displayMessage("Account already created. Please use other options.");
        return;
    }

    accountNumber = prompt("Enter your account number (numeric value):");
    if (isNaN(accountNumber) || accountNumber <= 0) {
        displayMessage("Please enter a valid numeric account number.");
        accountNumber = 0; 
        return createAccount();
    }
    let name=prompt('Enter your name');
    let initialAmount = prompt("Enter the initial amount to open a bank account (minimum Rs. 1000):");
    initialAmount = parseFloat(initialAmount);

    if (isNaN(initialAmount) || initialAmount <= 0) {
        displayMessage("Enter a valid amount.");
        return createAccount();
    } else if (initialAmount < 1000) {
        displayMessage("The initial amount must be at least Rs. 1000.");
        return createAccount();
    } else {
        amount += initialAmount; 
        displayMessage(`Your account is created successfully. Your account number is ${accountNumber}. Your current balance is Rs. ${amount}.`);
    }
}

function depositMoney() {
    if (accountNumber === 0) {
        displayMessage("Please create an account first.");
        return;
    }

    let depositAmount = prompt("Enter amount to deposit:");
    depositAmount = parseFloat(depositAmount);

    if (isNaN(depositAmount) || depositAmount <= 0) {
        displayMessage("Invalid amount to deposit.");
        return depositMoney();
    } else {
        amount += depositAmount; 
        displayMessage(`Rs. ${depositAmount} deposited successfully. Your current balance is: Rs. ${amount}.`);
    }
}

function withdraw() {
    if (accountNumber === 0) {
        displayMessage("Please create an account first.");
        return;
    }

    let withdrawAmount = prompt("Enter amount to withdraw:");
    withdrawAmount = parseFloat(withdrawAmount);

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        displayMessage("Invalid amount to withdraw.");
        return withdraw();
    } else if (amount - withdrawAmount < 0) {
        displayMessage("Insufficient funds. You must maintain a minimum balance of Rs.1000.");
        return withdraw();
    }
    else {
        amount -= withdrawAmount; 
        displayMessage(`Rs. ${withdrawAmount} withdrawn successfully. Your current balance is: Rs. ${amount}.`);
    }
}

function checkBalance() 
{
    if (accountNumber === 0) {
        displayMessage("Please create an account first.");
        return;
    } else {
        displayMessage(`Account number ${accountNumber} total balance is: Rs. ${amount}.`);
    }
}

function exitApplication() {
    displayMessage("Thank you for banking with us.");
    document.getElementById('menu').style.display = 'none';
}