import { useState } from "react";

const Search = ({setDate}) => {
    const [newDate, setNewDate] = useState("");


    return (
        <main>
        <p>
        Enter the date you want to search for.
        </p>
        <form>
            <input value={newDate}  onChange={(event) => {setNewDate(event.target.value)}} type="date" id="date-search" className="date-search"></input>
            <p>
            </p>
            <button onClick={(event) => {
                event.preventDefault()
                setDate(newDate)
                }}>Get Image</button>
        </form>
    </main>
    );
};

export default Search;