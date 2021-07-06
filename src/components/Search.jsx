import { useState } from "react";

const Search = ({setSingleDate, setIsSingleDate, isSingleDate}) => {
    const [newDate, setNewDate] = useState("");


    return (
        <main>
            <section>
                <p>Please select a date option below.</p>
                <button id="single-date" value="single date" className="get-image-button" onClick={(event) => {
                    event.preventDefault()
                    console.log("SINGLE");
                    setIsSingleDate(true);
                }}>Single Date</button>
                
                <button id="date-range" value="date range" className="get-image-button" onClick={(event) => {
                    event.preventDefault()
                    console.log("MULTI");
                    setIsSingleDate(false);
                }}>Date Range</button>
                <br></br>
            </section>

            <p>
            Enter the date you want to search for.
            </p>
            <form>
                <input value={newDate}  onChange={(event) => {setNewDate(event.target.value)}} type="date" id="date-search" className="date-search"></input>
                <button className="get-image-button" onClick={(event) => {
                    //to prevent page reload onClick
                    event.preventDefault()
                    //sets original date state from App.js to newDate state
                    setSingleDate(newDate)
                    console.log(newDate);
                    }}>Get Image</button>
            </form>
        </main>
    );
};

export default Search;