import React from "react"
import { nanoid } from "nanoid"

export default function app() {
    
	const [flashCard, setFlashCard] = React.useState({
		question: "What is React?",
		choices: ["A JavaScript framework", "A JavaScript library"],
		answer: "A JavaScript library.",
		explanation: `It's absolutely crucial that if you ever hear anyone have the
              audacity to call it a framework, you must correct them as
              pedantically as possible, preferably starting your response with
              the phrase "um, actually..."`,
	})
	const[shown, setShown]=React.useState(false)
/* Challenge: 

    The flashcard needs to flip back and forth. Your task is to set this up as follows: 
    
        1. When the user clicks on the flashcard, the CSS class "flipped" should 
           be added to the div with the className of "flash-card" on line 39. 
           
        2. If the user clicks on the flashcard again, the class "flipped" should be removed 
           from the div. 
           
        3. The same pattern should be repeated for any subsequent clicks, so that the user can 
           continue flipping the card back and forth as many times as they want. 
*/

	const handleClick=()=>{
		setShown(prev=>!prev)
	}
	
	return (
		<div>
			<header>
				<img src="./images/react.svg" />
				<h1> React Study Buddy </h1>
			</header>
 
			{/*-------Edit the div below!------------*/}

			<div onClick={handleClick} className={`flash-card ${shown &&"flipped"}`}>
			
            {/*-------Edit the div above!------------*/}

				<div className="flash-card-inner">
					<div className="flash-card-front">
						<p className="question">{flashCard.question}</p>
						<ol type="a">
							{flashCard.choices.map(choice => (
								<li key={nanoid()}>{choice}</li>
							))}
						</ol>
					</div>
					<div className="flash-card-back">
						<p className="answer">{flashCard.answer}</p>
						<p>{flashCard.explanation}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
