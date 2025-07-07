export default function GameLoseScreen({setLives, setCurrentSceneIndex, setGameState}) {

    return(
        <div className = "lose-screen">
            <h1>The Case Went Cold</h1>
            <p>You tried your best, but not even Detective Mittens could solve this one. Where could the statue be? Wherever it is,
                you hope it's having a lovely time. 
            </p>
            <button onClick={()=> {
                setLives(2);
                setCurrentSceneIndex(0);
                setGameState("menu");
            }}>Try again from the beginning</button>

        </div>

    );
}