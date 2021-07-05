import { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import Content from "./components/Content";
import { fetchImageData } from "./utils/api";
import { dateFormatter } from "./utils/date-formatter";

function App() {
  const [date, setDate] = useState( dateFormatter(new Date()))
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImageData(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_API_KEY}&date=${date}`).then((body) => {
        setContent(body)
        setIsLoading(false)
    })
}, [date]);

  return (
    <>
      <Header />
      <Search setDate={setDate}/>
      {!isLoading ? <Content content={content}/> : ""}
    </>
  );
}

export default App;
