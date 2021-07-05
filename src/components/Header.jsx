import nasaLogo from "../assets/NASA_logo.png";

const Header = () => {
    return (
        <header className="App-header">
            <img className="nasa-logo" src={nasaLogo} alt="nasa logo"></img>
            <h1>Astronomy Picture of the Day</h1>
        </header>
    );
};

export default Header;