let numberValue = document.getElementById('number');
let categoryValue  = document.getElementById('category');
let dificultyValue = document.getElementById('deficulty');
let form = document.querySelector('.frm');
let questionSection = document.querySelector('.questions-sec');
let loader = document.querySelector('.loader');
let nextBtn = document.querySelector('.next-btn');
let result = document.querySelector('.result');
let question_arr;
let index = 0;
let userCorrectAnswer = 0;
let userScore;


window.onload = ()=>
{
    form.addEventListener('submit', handleSubmit);
    loader.style.display = 'none';
    console.log(result);
}


const handleSubmit = (e)=>
{
    e.preventDefault();
    let tmp = fetchQuestions();
    loader.style.display = 'block';
    form.style.display = "none"; 
    tmp.then(data=>
    {
        question_arr = data;
        setQuestionPage(question_arr);
    
    });
}

const fetchQuestions = async ()=>
{
    const url = `https://opentdb.com/api.php?amount=${numberValue.value}&category=${categoryValue.value}&difficulty=${dificultyValue.value}&type=multiple`;
    console.log(url);
    try
    {
        const response = await fetch(url);
        const questionData = await response.json();
        return questionData.results;
    }catch(error)
    {
        console.log('Got this error while fetching...' , error);
    }

}

const setQuestionPage = (question_arr)=>
{
    loader.style.display = 'none'; 
    questionSection.style.display = "block";
    const content = `<div class="score-board">
    <h4 class='user-score'>Correct Answer : 0 / 0</h4>
</div>
<div class="question">
    <h1>${question_arr[index].question}</h1>
</div>
<div class="ans-btn-container">
    <button class="ans-btn" onclick='updateScore()'>${question_arr[index].correct_answer}</button>
    <button class="ans-btn" onclick='updateIndex()'>${ question_arr[index].incorrect_answers[0]}</button>
    <button class="ans-btn" onclick='updateIndex()'>${ question_arr[index].incorrect_answers[1]}</button>
    <button class="ans-btn" onclick='updateIndex()'>${ question_arr[index].incorrect_answers[2]}</button>
</div>
<div class="next-question">
    <button class="next-btn" onclick="updateIndex()">Next Question</button>
</div>`;
    questionSection.innerHTML =content;
    userScore = document.querySelector('.score-board');
    userScore.innerHTML =  `Correct answers ${question_arr.length} / ${userCorrectAnswer}`;
}

const updateIndex = ()=>
{
    index += 1;
    if(index === question_arr.length)
    {
        result.style.display = 'grid';
        questionSection.style.display = 'none';
        const para = document.querySelector('.para');
        const percentage = (userCorrectAnswer / question_arr.length) * 100;
        para.innerHTML = `You answered ${percentage.toFixed(2)}% question correctly`
    }else{
        setQuestionPage(question_arr);
    }
}

const updateScore = ()=>
{
    userCorrectAnswer+=1;
    console.log(userCorrectAnswer)
    updateIndex();
}
const backToNorm = ()=>{
    location.reload();
}