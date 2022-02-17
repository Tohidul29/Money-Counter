// function for counting total expense:
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
const balanceAmountText = document.getElementById('balance-amount');
const savingAmountText = document.getElementById('saving-amount');
const expenseAmountText = document.getElementById('expense-amount');
const remainingAmountText = document.getElementById('remaining-amount');


// calculate button funtionality here:
document.getElementById('calculate').addEventListener('click', function () {
    foodExpenseValue = foodExpense.value;
    rentExpenseValue = rentExpense.value;
    clothesExpenseValue = clothesExpense.value;
    incomeValue = income.value;
    if (!(inputValidation(incomeValue) && inputValidation(foodExpenseValue) && inputValidation(rentExpenseValue) && inputValidation(clothesExpenseValue))) {
        return;
    }

    const expense = addTotalExpenses(foodExpenseValue, rentExpenseValue, clothesExpenseValue);

    if (expense > incomeValue) {
        expenseAmountText.innerText = 'you spent more than your income';
    } else {
        expenseAmountText.innerText = expense;
        balanceAmount = parseFloat(incomeValue) - parseFloat(expense);
    } balanceAmountText.innerText = balanceAmount;

    foodExpense.value = '';
    rentExpense.value = '';
    clothesExpense.value = '';
    income.value = '';
})


// save button funtionality here:
document.getElementById('save').addEventListener('click', function () {
    foodExpenseValue = foodExpense.value;
    rentExpenseValue = rentExpense.value;
    clothesExpenseValue = clothesExpense.value;
    incomeValue = income.value;
    savingAmountValue = save.value;
    // input validation
    if (!(inputValidation(incomeValue) && inputValidation(foodExpenseValue) && inputValidation(rentExpenseValue) && inputValidation(clothesExpenseValue) && inputValidation(savingAmountValue))) {
        savingAmountText.innerText = 'please give save input between (0 to 100)%';
        return;
    }

    savingAmount = (parseFloat(incomeValue) * parseFloat(savingAmountValue)) / 100;
    savingAmountText.innerText = savingAmount;

    // remaining balance:
    if (savingAmount < balanceAmount) {
        remainingBalance = parseFloat(balanceAmount) - parseFloat(savingAmount);
        remainingAmountText.innerText = remainingBalance;
    } else {
        remainingAmountText.innerText = 'saving amount can not be more than balance';
    } 
    save.value = '';
})

// validation of expense fields
function inputValidation(inp) {
    inp = parseInt(inp);
    if (typeof inp == 'number' && inp >= 0) {
        return true;
    } else {
        balanceAmountText.innerText = 'Invalid input !'; // setting invalid input
        balanceAmountText.style.color = 'black';
        expenseAmountText.innerText = '';
        return false;
    }
}