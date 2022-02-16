//function for counting total expense:
function addTotalExpenses(food, rent, clothes){
    const totalExpense = parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
    return totalExpense;
}

//get all the input values from input id:
const foodExpense = document.getElementById('food-amount');
const rentExpense = document.getElementById('rent-amount');
const clothesExpense = document.getElementById('cloth-amount');
const income = document.getElementById('income-amount');
const save = document.getElementById('saving-number');

//get all the amount texts from html tags:
const balanceAmountText = document.getElementById('balance-amount');
const savingAmountText = document.getElementById('saving-amount');
const expenseAmountText = document.getElementById('expense-amount');
const remainingAmountText = document.getElementById('remaining-amount');

//calculate button funtionality here:
document.getElementById('calculate').addEventListener('click', function(){
    foodExpenseValue = foodExpense.value;
    rentExpenseValue = rentExpense.value;
    clothesExpenseValue = clothesExpense.value;
    incomeValue = income.value;

    const expense = addTotalExpenses(foodExpenseValue, rentExpenseValue, clothesExpenseValue);

    expenseAmountText.innerText = expense;

    balanceAmount = parseFloat(incomeValue) - parseFloat(expense);

    balanceAmountText.innerText = balanceAmount;

    foodExpense.value = '';
    rentExpense.value = '';
    clothesExpense.value = '';
    income.value = '';
})

//save button funtionality here:
document.getElementById('save').addEventListener('click', function(){
    savingAmountValue = save.value;
    savingAmount = (parseFloat(balanceAmount) * parseFloat(savingAmountValue)) / 100;
    savingAmountText.innerText = savingAmount;


    //remaining balance:
    remainingBalance = parseFloat(balanceAmount) - parseFloat(savingAmount);
    remainingAmountText.innerText = remainingBalance;
    
    save.value = '';
})

