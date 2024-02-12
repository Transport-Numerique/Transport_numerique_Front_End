
import './Acceuil.css';

const Acceuil = () => {
    
    return (    
        <div className="app">
            <header className="header">
                <div className="header-content">
                    <img src='./images/Logo.png' alt="Logo" className="logo" />
                    <nav className="nav">
                        <a href="#"> <i className="fas fa-home"> </i>Accueil</a>
                        <a href="#">Login/Inscription</a>
                        <a href="#" >Commander</a>
                    </nav>
                </div>
            </header>
            <div className="content">
                <div className="big-logo">
                    <img src='./images/Logo.png' alt="Big Logo" />
                </div>
                <p className="lorem-ipsum">
                    Commander votre ticket de transport en ligne 
                </p>
                <button className="start-button" >Commander</button>
            </div>
        </div>
    );
};
       
export default Acceuil; 