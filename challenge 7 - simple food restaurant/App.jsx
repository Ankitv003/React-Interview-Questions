import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
const App = () => {
   return(
    <>
        <Header />
        <Main />
        <Footer />
    </>
   )
} 

export default App
 
/* Challenge: 

This webpage was created by inserting HTML elements into the DOM with vanilla JS. Your task is to convert the JS into React JSX and render it to the page with React. Here's what we want: 

        1. The page should be rendered by a single functional React component, which is composed of 
           other functional components and elements, written in JSX.
        
        2. The final result should be indistinguishable from the current page (unless you're doing 
           a bonus challenge).
        
        3. All of the current JS should be deleted by the end. 
        
        4. The code should be modular and well-organized.
*/
// const header = `<header>
//                     <div class="button-container">
//                         <button>Our Menu</button> 
//                         <button>About</button> 
//                         <button>Hours & Location</button>
//                     </div> 
//                 </header>`
// document.body.innerHTML = header

// const mainElement = document.createElement("main")
// document.body.appendChild(mainElement)

// const someHeading = document.createElement("h1")
// someHeading.classList.add("logo-container") 
// someHeading.textContent = "Simple Food Restaurant"
// mainElement.appendChild(someHeading)

// const someParagraph = document.createElement("p")
// someParagraph.classList.add("info-container")
// someParagraph.textContent = `We make simple food for simple people. Want a sandwich? You got it. 
//                             A hot dog? Coming right up. Poached salmon eggs with fire-roasted asparagus fritters hand-glazed in locally-sourced artisanal honey? Get out of here. Try the Fancy Food Cafe across the street.`
// mainElement.appendChild(someParagraph)

// const imageContainer = `<div class="image-container">
//                             <div class="image-wrapper">
//                                 <img class="hot-dog" src="images/hotdogs.jpg"/>
//                             </div>
//                             <div class="image-wrapper">
//                                 <img src="images/sandwich.jpg"/>
//                             </div> 
//                             <div class="image-wrapper">
//                                 <img src="images/hamburger.jpg"/>
//                             </div>                                  
//                         </div>`
// mainElement.insertAdjacentHTML("beforeend", imageContainer)

// const footer = `<footer>
//                     <p> 
//                         Made by <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Cheeky Coding Company</a>™.
//                     </p>
//                 </footer>`
// document.body.innerHTML += footer