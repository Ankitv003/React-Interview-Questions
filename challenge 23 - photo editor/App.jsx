import React from "react"
 
export default function App() {
	const [filter, setFilter] = React.useState({
		brightness: 1,
		contrast: 1,
		saturation: 1,
	})
	    
/* Challenge

    The range inputs don't yet do anything. Your task is to make them work as follows: 
    
        1. Whenever the user moves one of the range input sliders, its corresponding value in the 
           filter state object should be updated to be the value of the input, while preserving the other two values that have not changed. 
           
        2. With each update of the filter state object, the --brightness, --contrast, and 
           --saturation CSS variables that control the image's filter properties should be updated to be the values of their corresponding filter state object properties. The relevant CSS can be found on lines 1-13 of the styles.css file. 
		                       
        3. The initial values of the range inputs should be the inital values of their 
		   corresponding properties in the filter state object.   
		   
		4. Try to make your code as DRY as possible! 
*/
	const handleChange=(e)=>{
		const {name,value}= e.target
		setFilter(prev=>({...prev, [name]:value}))
	}
	let style={}
	
	for (const prop in filter){
		style[`--${prop}`]=filter[prop]
	}
	return (
		<div className="main-container">
			<h1><span>📷</span> Photo Editor <span>📷</span></h1>

			<div className="image-container">
				<img style={style} src="./images/kunal-goswami-CuUn__aMGD4-unsplash.jpg" />
			</div>

			<form>
				<label>
					<input
						type="range"
						onChange={handleChange}
						name="brightness"
						min={0}
						max={2}
						step={0.1}
						value={filter.brightness}
					/>
					<span>Brightness</span>
				</label>

				<label>
					<input
						type="range"
						onChange={handleChange}
						name="contrast"
						min={0}
						max={2}
						step={0.1}
						value={filter.contrast}
					/>
					<span>Contrast</span>
				</label>

				<label>
					<input
						type="range"
						onChange={handleChange}
						name="saturation"
						min={0}
						max={2}
						step={0.1}
						value={filter.saturation}
					/>
					<span>Saturation</span>
				</label>
			</form>
		</div>
	)
}
