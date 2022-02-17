// function for counting total expenses:
function addTotalExpenses(food, rent, clothes) {
    const totalExpense = parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
    return totalExpense;
}

// get all the input values from input id:
const foodExpense = document.getElementById('food-amount');
const rentExpense = document.getElementById('rent-amount');
const clothesExpense = document.getElementById('cloth-amount');
const income = document.getElementById('income-amount');
const save = document.getElementById('saving-number');

// get all the amount texts from html tags:
const balanceAmountNumber = document.getElementById('balance-amount');
const savingAmountNumber = document.getElementById('saving-amount');
const expenseAmountNumber = document.getElementById('expense-amount');
const remainingAmountNumber = document.getElementById('remaining-amount');
const totalExpenseText = document.getElementById('total-expense-text');
const balanceAmountText = document.getElementById('balance-amount-text');
const savingAmountText = document.getElementById('saving-amount-text');
const remainingAmountText = document.getElementById('remaining-amount-text');


// calculate button funtionality here:
document.getElementById('calculate').addEventListener('click', function () {
    foodExpenseValue = foodExpense.value;
    rentExpenseValue = rentExpense.value;
    clothesExpenseValue = clothesExpense.value;
    incomeValue = income.value;
    if (!(inputValidationChecking(incomeValue) && inputValidationChecking(foodExpenseValue) && inputValidationChecking(rentExpenseValue) && inputValidationChecking(clothesExpenseValue))) {
        return;
    }

    const expense = addTotalExpenses(foodExpenseValue, rentExpenseValue, clothesExpenseValue);

    if (expense > incomeValue) {
        totalExpenseText.innerText = 'Sorry, you spent more than your income !!!';
        balanceAmountText.style.display = 'none';
        totalExpenseText.style.color = 'rgba(197,46,54,0.85)';
    } else {
        expenseAmountNumber.innerText = expense;
        balanceAmount = parseFloat(incomeValue) - parseFloat(expense);
        balanceAmountNumber.innerText = balanceAmount;

    }
})

// save button funtionality here:
document.getElementById('save').addEventListener('click', function () {
    incomeValue = income.value;
    savingAmountValue = save.value;

    if (!(inputValidationChecking(savingAmountValue))) {
        return;
    }

    // input validation
    savingAmount = (parseFloat(incomeValue) * parseFloat(savingAmountValue)) / 100;
    savingAmountNumber.innerText = savingAmount;

    // remaining balance:
    if (savingAmount < balanceAmount) {
        remainingBalance = parseFloat(balanceAmount) - parseFloat(savingAmount);
        remainingAmountNumber.innerText = remainingBalance;
    } else {
        remainingAmountText.innerText = 'Sorry, saving amount can not be more than balance';
        remainingAmountText.style.color = 'rgba(161,0,8,0.85)';
    }
})

// validation for all of the input fields:
function inputValidationChecking(userInput) {
    userInput = parseFloat(userInput);
    if (typeof userInput == 'number' && userInput >= 0) {
        return true;
    }
    else {
        //if invalid input:
        totalExpenseText.innerText = 'Invalid or empty input !!!';
        totalExpenseText.style.color = 'rgba(245,6,18,0.85)';
        balanceAmountText.style.display = 'none';
        return false;
    }
}