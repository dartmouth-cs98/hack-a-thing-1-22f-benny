import './WinScreen.css';

export default function WinScreen({
    time, hints
}){

    return (
        <div className="container">
            <h1>Great Job!</h1>
            <h2>Your time: {time.toString().slice(0, -3)}.{time.toString().slice(1, -2)} seconds</h2>
            <h2>Number of hints used: {hints}</h2>
        </div>
    )
}