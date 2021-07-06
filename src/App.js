import { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import SingleDateContent from "./components/Single-Date-Content";
import MultiDateContent from './components/Date-Range-Content';
import { dateFormatter } from "./utils/date-formatter";
import { fetchImageData } from "./utils/api";


function App() {
  //useState runs once on load, setting the initial state to whatever is pased in, e.g the date state is set a the evaluation of the dateFormatter function passed todays date. Then it's run again when the setState functions are invoked onClick in the Search component with the value from the date input, using a second bit of state to prevent API queries on each keystroke.
  const [singleDate, setSingleDate] = useState(dateFormatter(new Date()))
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSingleDate, setIsSingleDate] = useState(true);

  let queryString = ``;

  //can't have the useEffect inside of each Content Component because otherwise setIsLoading is never set to false, and the component is never generated
  if (isSingleDate) {
    queryString = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_API_KEY}&date=${singleDate}`
  } else if (!isSingleDate) {
    queryString = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_API_KEY}&start_date=${startDate}&end_date=${endDate}`
  }
  useEffect(() => {
    fetchImageData(queryString).then((body) => {
        setContent(body)
        console.log(queryString);
        setIsLoading(false)
    })
}, [queryString]);

  return (
    <>
      <Header />
      <Search setDate={setSingleDate} setIsSingleDate={setIsSingleDate} isSingleDate={isSingleDate}/>
      {(!isLoading && isSingleDate) ? <SingleDateContent content={content} singleDate={singleDate} isSingleDate={isSingleDate}/> : ""}

      {(!isLoading && !isSingleDate) ? <MultiDateContent content={content}/> : ""}
    </>
  );
}

export default App;
