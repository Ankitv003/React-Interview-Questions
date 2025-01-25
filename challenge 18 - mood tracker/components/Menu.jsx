import React from "react"

export default function Menu(props) {
    
    function scrollDown() {
        window.scrollTo({
            top: (window.innerHeight * 2),
            behavior: "smooth",
        })
    }
    
    React.useEffect(() => {
        if (props.skip) scrollDown()
    }, [])
    
    return (
        <div className="menu-wrapper">
            <div className="header-text-container">
              <h1>Life Tracker</h1>
            </div>
            <div className="main-menu-container">
                <button className="menu-item-button">
                    <img className="menu-icon" src="./images/goals.svg"/>
                <p>Goals</p>
                </button>
                <button className="menu-item-button">
                     <img className="menu-icon" src="./images/to-do-list.svg"/>
                     <p>To Do List</p>
                </button>
                <button className="menu-item-button" onClick={scrollDown}>
                    <img className="menu-icon" src="./images/monthly-report.svg"/>
                    <p>Reports</p>
                </button>
                <button className="menu-item-button">
                    <img className="menu-icon" src="./images/settings.svg"/>
                    <p>Settings</p>
                </button>
                <button className="menu-item-button">
                    <img className="menu-icon highlights" src="./images/highlights.svg"/>
                    <p>Highlights</p>
                </button>     
                <button className="menu-item-button">
                    <img className="menu-icon" src="./images/new-entry.svg"/>
                    <p>New Entry</p>
                </button>    
            </div>  
      </div>
    )
}