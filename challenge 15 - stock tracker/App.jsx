import React from "react"
import stockData from "./data/stockData"
import Stock from "./components/Stock"

export default function App() {
    
    const [currentData, setCurrentData] = React.useState(stockData)
        
    const stockElements = currentData.map(stock => {
        return (
            <Stock 
                key={stock.stockName}
                stock={stock}
            />   
        )
    })
    
    React.useEffect(() => {
        
    	setInterval(() => {
            
    		function add(a, b) {
    			return a + b
    		}
    
    		function subtract(a, b) {
    			return a - b
    		}
    
    		function getOperation() {
    			return Math.random() * 1 > 0.5 ? add : subtract
    		}
    
    		function getNewNumber() {
    			return Math.random() * 20
    		}
    
    		function updatePrice(currentPrice) {
    			const operation = getOperation()
    			const newPrice = getNewNumber()
    			return operation(+currentPrice, newPrice)
    		}
    
    		setCurrentData(prevData =>
    			prevData.map((stock) => ({
    				...stock,
    				currentPrice: +updatePrice(stock.currentPrice).toFixed(2),
    			}))
    		)
    	}, 4000)
    }, [])
    
    return (
        <div>
            <header>
                <img className="app-logo" src="./images/app-logo.svg"/>
                <h1><span>Stock Tracker</span></h1>
            </header>
        <div className="wrapper">
            {stockElements}
        </div>
        </div>
    )
}