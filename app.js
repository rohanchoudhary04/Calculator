let string = "";
let isDegree = false;

let buttons = document.querySelectorAll('.btn');
let ques = document.querySelector('.task');
let ans = document.querySelector('.answer');

function calcSin(val) {
    return isDegree ? Math.sin(val * (Math.PI / 180)) : Math.sin(val);
}

function calcCos(val) {
    return isDegree ? Math.cos(val * (Math.PI / 180)) : Math.cos(val);
}

Array.from(buttons).forEach((button)=> {
    button.addEventListener('click', (e)=> {
    if(e.target.innerHTML == '=') {
        try {
            let expression = string
                .replace(/\bsin\s*\(/g, 'calcSin(')
                .replace(/\bcos\s*\(/g, 'calcCos(')
                .replace(/\be\b/g, 'Math.E');

            let result = eval(expression);
            ans.value = result;
        } catch (error) {
                ans.value = "Error";
                string = "";
        }
      
    } else if (e.target.innerHTML == "C") {
        string = "";
        ques.value = string;
        ans.value = string;
    } else if (e.target.innerHTML == "DEL") {
        string =  string.slice(0, -1);
        ques.value = string;
    } else if (e.target.innerHTML == "sin" || e.target.innerHTML == "cos") {
        string += e.target.innerHTML + "(";
        ques.value = string;
    } else if (e.target.innerHTML == "e") {
        string += "e";
        ques.value = string;
    } else if (e.target.innerHTML == "deg" || e.target.innerHTML == "rad") {
        isDegree = !isDegree;
        e.target.innerHTML = isDegree ? "rad" : "deg";
    } else {
        string += e.target.innerHTML;
        ques.value = string;
    }
    });
});
