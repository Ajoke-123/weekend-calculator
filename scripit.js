// Declaration of variables
// const budget=100;
let expenses=0;

// const spending = {
//     budget ,
//     expenses ,
//     getReminingBudget: function() {
//         return this.budget - this.expenses;
//     },
// };

// function updataDisplay(){
//     document.getElementById('budgetDisplay').innerHTML=spending.budget;
//     document.getElementById('expenseDisplay').innerHTML=spending.expenses;
//     document.getElementById('remainingDisplay').innerHTML=spending.getReminingBudget();
// }

// updataDisplay();
//     document.getElementById('btnaddExpense').addEventListener('click', (addExpense)  =>{
//         const expenseInput = document.getElementById('expenseInput').value;
//         spending.expenses += parseInt(expenseInput);
//         updataDisplay();
//         document.getElementById('expenseInput').value ='';
//     });



const spending = {
        budget : 100 ,
        expenses: "" ,
}
const expenseInput = document.getElementById('expenseInput');
const addExpence = document.getElementById('addExpence');
const expenseDisplay = document.getElementById("expenseDisplay");

const getReminingBudget = function() {
    expenseInput.value = " ";
           return document.getElementById('remainingDisplay').innerHTML = "Remaining : $" + (spending.budget - expenseInput.value) ;
        };
        const getEspense = function(){
            return document.getElementById('expenseDisplay').innerHTML = "Spent : $" +  expenseInput.value;
        }
const updataDisplay = function(){
    return document.getElementById('updatedisplay').innerHTML = "the budget is $" + spending.budget + " , the espense is " + "$" + expenseInput.value + " " + getReminingBudget();
}
addExpence.addEventListener('click', 
    function(){
getEspense();
getReminingBudget();
updataDisplay()
    }
)