import {useEffect, useState} from 'react';

export default function TriviaScreen({userCategoryChoice, difficulty, setGameState, setLives, 
    lives, setCurrentSceneIndex, currentSceneIndex, currentScene}) {

    // This data will be the question fetched from the API
    const [data, setData] = useState(null);

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState(null);

    const NEGATIVE_FEEDBACK = "Sorry, wrong answer. Lose one life."
    useEffect(() => {
        const fetchData = async () => {
    try {
        const url = `https://opentdb.com/api.php?amount=1&category=${userCategoryChoice}&difficulty=${difficulty}&type=multiple`;
        const res = await fetch(url);
        const json = await res.json();
        const question = json.results[0];
        // we need a shuffled array that has the answer and three incorrect answers in random spots
        const allAnswersArray = [...question.incorrect_answers, question.correct_answer].sort(()=>Math.random()-0.5);
        // set data so we can use this to display options correctly on screen and match right answer later
        setData({
            questionText: question.question,
            correctAnswer: question.correct_answer,
            shuffledAnswers: allAnswersArray
        })
        } catch (error) {
            console.error("Error fetching data", error);
        }
        
    } 
    fetchData();
    }, []);

    const handleAnswer = (answer) => {
        // return if there is already answer selected so user doesn't keep clicking on them
        if(selectedAnswer) return;

        setSelectedAnswer(answer);
        //correct answer
        if (answer === data.correctAnswer) {
            setFeedback(currentScene.positiveFeedback);
            
        //incorrect answer
        } else {
            setFeedback(NEGATIVE_FEEDBACK);
            setLives(previous => previous-1);
        }
    };

    const handleContinue = () => {
        const isCorrect = (selectedAnswer === data.correctAnswer);
        setSelectedAnswer(null);
        setFeedback(null);
        // was correct
        if (isCorrect) {
            // check if we finished the game
            if(currentSceneIndex >= 5){
                setGameState("gamewin");
                return;
            }
            setCurrentSceneIndex(currentSceneIndex + 1);
            setGameState("game");
        } else {
            // checking for loss condition
            if(lives <= 0){
                setGameState("gamelose");
            } else {
                setGameState("game");
            }
        }
    }

    // we need this guard here because the question does not load immediately
    if (!data) return <p>Loading question...</p>
    

    return(
        
        <div className = "trivia-screen">
            <h2>Trivia Question</h2>
            <p dangerouslySetInnerHTML={{__html: data.questionText}} />

            <div className = "answers">
                {data.shuffledAnswers.map((answer) => (
                    <button
                    key ={answer}
                    onClick = {()=> handleAnswer(answer)}
                    dangerouslySetInnerHTML={{__html: answer}}
                    />
                ))}
            </div>

            {feedback && <p className = "feedback">{feedback}</p>}
            {selectedAnswer && (
                <button onClick={handleContinue} className = "continue-button">Continue</button>
            )}
        </div>


    );
}