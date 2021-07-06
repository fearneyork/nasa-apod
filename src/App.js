import { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import SingleDateContent from "./components/Single-Date-Content";
import MultiDateContent from './components/Date-RangeContent';
import { fetchImageData } from "./utils/api";
import { dateFormatter } from "./utils/date-formatter";

function App() {
  //useState runs once on load, setting the initial state to whatever is pased in, e.g the date state is set a the evaluation of the dateFormatter function passed todays date. Then it's run again when the setState functions are invoked onClick in the Search component with the value from the date input, using a second bit of state to prevent API queries on each keystroke.
  const [date, setDate] = useState( dateFormatter(new Date()))
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSingleDate, setIsSingleDate] = useState(true);

  useEffect(() => {
    fetchImageData(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_API_KEY}&date=${date}`).then((body) => {
        setContent(body)
        setIsLoading(false)
    })
}, [date]);

  return (
    <>
      <Header />
      <Search setDate={setDate} setIsSingleDate={setIsSingleDate} isSingleDate={isSingleDate}/>
      {(!isLoading && isSingleDate) ? <SingleDateContent content={content} date={date} isSingleDate={isSingleDate}/> : ""}
      {(!isLoading && !isSingleDate) ? <MultiDateContent content={content} date={date} isSingleDate={isSingleDate}/> : ""}
    </>
  );
}

export default App;
