let numOfTasks = +prompt("Ishlamoqchi bo'lgan misollar sonini kiriting");
while (isNaN(numOfTasks) || numOfTasks==0) {
    numOfTasks = +prompt("Xato! Iltimos, qaytadan urinib ko'rib, son kiriting")
}

for (let i = 0; i < numOfTasks; i++) {
    let num1 = Math.round(Math.random()*10);
    let num2 = Math.round(Math.random()*10);
    let symbol = Math.round(Math.random()*5);
    
    if (symbol==0) {
        question = +prompt(`${num1} + ${num2} = ?`);
        answer = num1 +num2;
    } else if(symbol==1){
        question = +prompt(`${num1} - ${num2} = ?`);
        answer = num1-num2;
    } else if(symbol==2){
        question = +prompt(`${num1} * ${num2} = ?`);
        answer = num1 * num2;
    } else if(symbol==3){
        question = +prompt(`${num1} / ${num2} = ?`);
        answer = num1 / num2;
    } else if(symbol==4){
        question = +prompt(`${num1} % ${num2} = ?`);
        answer = num1 % num2;
    } else{
         question = +prompt(`${num1} ning ${num2} darajasi nechiga teng?`);
        answer = num1 ** num2;
    } 
    
    if (question==answer) {
        console.log(`Sizning javobingiz to'g'ri: ${answer}`);
    } else{
        console.log(`Sizning javobingiz noto'g'ri: ${question}. To'g'ri javob: ${answer}`);
    }
}


