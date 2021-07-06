import { dateFormatter } from "../utils/date-formatter";
import sadNasa from "../assets/sad_nasa.png"

const SingleDateContent = ({content, date, isSingleDate}) => {
    console.log(content);
    
    const latestDate = dateFormatter(new Date());
    const latestYear = +latestDate.slice(0, 4)
    
    const inputYear = +date.slice(0, 4)

    let heading = "";
    let url = "";
    let description = "";
    let className = "";

    if (inputYear >= 1995 && inputYear <= latestYear) {
        heading = content.title
        url = content.url
        description = content.explanation
        className = "api-picture";
    } else if (content.code ===400) {
        heading = "Invalid date entry"
        url=sadNasa
        description = "Please try again with a vaild date."
        className = "api-error"
    }
    return (
        <section className="content-card">
                <h2 className="content-title">{heading}</h2>
                <img className={className} src={url} alt={heading} aria-roledescription="button"></img>
                <p className="content-description">{description}</p>
        </section>
    )

};



export default SingleDateContent;