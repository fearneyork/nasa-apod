const Content = ({content}) => {
    console.log(content);

    return (
        <section>
            <h2>{content.title}</h2>
            <img className="api-picture" src={content.url} alt={content.title}></img>
            
        </section>
    );
};

export default Content;