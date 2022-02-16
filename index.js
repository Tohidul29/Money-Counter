//function for counting total expense:
function addTotalExpenses(food, rent, clothes){
    const totalExpense = parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
    return totalExpense;
}

//get all the input values from input id:
const foodExpense = document.getElementById('food-amount');
const rentExpense = document.getElementById('rent-amount');
const clothesExpense = document.getElementById('cloth-amount');
const expenseAmount = document.getElementById('expense-amount');
const income = document.getElementById('income-amount');
const balanceAmount = document.getElementById('balance-amount')

document.getElementById('calculate').addEventListener('click', function(){
    foodExpenseValue = foodExpense.value;
    rentExpenseValue = rentExpense.value;
    clothesExpenseValue = clothesExpense.value;
    incomeValue = income.value;

    const expense = addTotalExpenses(foodExpenseValue, rentExpenseValue, clothesExpenseValue);

    expenseAmount.innerText = expense;

    balance = parseFloat(incomeValue) - parseFloat(expense);

    balanceAmount.innerText = balance

    //calculate saving amount:
    

    foodExpense.value = '';
    rentExpense.value = '';
    clothesExpense.value = '';
    income.value = '';

})


