import React from "react"
import Header from "./components/Header"
import File from "./components/File"
import Footer from "./components/Footer"
import generateMessage from "./utilities/generateMessage"
import {nanoid} from "nanoid"
import {detect} from "detect-browser"

export default function App() {
		
	const [userData, setUserData] = React.useState({
		userId: nanoid(),
		downloadRequested: false,
		downloadTimeStamp: undefined,
		requestedFileId: undefined, 
		browser: undefined,
		location: {ip: undefined, city: undefined, country: undefined}
	})
	
	if (userData.downloadRequested) {
		generateMessage(userData)
	}
	
	React.useEffect(()=>{
		if (userData.downloadRequested) {
			throw Error("The userID changed :-(")
		}
	}, [userData.userId])


/* Challenge 

	The download page for this file needs a download button! Your task is to create one as follows: 
      
      	1. When the user clicks the "Download" button on line 82 below, the button should become 
		   disabled, and the userData state should be updated as follows: 
		   
           	        Property		 	  Value(s)					  
			     ╷---------------------╷-----------------------------------------------------------╷
			     |  userId             |  preserve the userId value of the previous userData state |
			     |---------------------|-----------------------------------------------------------|
		  	     |  downloadRequested  |  true                               					   |
			     |---------------------|-----------------------------------------------------------|
			     |  downloadTimeStamp  |  a new Date object, converted to localeString             |
			     |---------------------|-----------------------------------------------------------|
			 	 |  requestedFileId    |  the file ID stored as data in the download button        |
                 |---------------------|-----------------------------------------------------------|
			     |  browser            |  the return value of the detect function (already 		   |
				 |					   |  imported into this file)								   |
                 |---------------------|-----------------------------------------------------------|
			     |  location  		   |  an object with the following properties:			       |
			     |					   |     - ip: the user's IP address					       |
				 |					   |	 - city: the user's city name						   |
				 |					   |	 - country: the name of the user's country			   |
                 |                     |       													   |
			     ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
	
	 	2. Aside from the above, nothing needs to be changed or added anywhere else in the code. If 
		   you complete these tasks successfully, you should see a correctly rendered message in the console, and the button should become faded and unclickable after you click it. 
*/
	const handleClick=(e)=>{
			fetch("https://ipapi.co/json/")
			.then(res=>res.json())
			.then(data=>setUserData((prevData=>({
				...prevData,
				downloadRequested: true,
				downloadTimeStamp: new Date().toLocaleString(),
				requestedFileId: e.target.dataset.fileId, 
				browser: detect(),
				location:{
					ip:data.ip,
					city:data.city,
					country:data.country_name}
					}))))
	}
	return (
		<div>
			<Header />
			<main>
				<File />
				<div>
				
					<button
					onClick={handleClick}
						className="download-button" 
						data-file-id={nanoid()}
						disabled={userData.downloadRequested}
					>
						Download
					</button>

				</div>
			</main>
			<Footer />
		</div>
	)
}
