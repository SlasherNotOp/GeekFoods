import "./Header.css"
function Header(){


    return(
        <>
        <div className="main-class">
        <div className="Header-main-class">
        <div className="logo">
            <img className="logo-img" src="" alt="img"></img>
        </div>
        
        <div className="list-div">
            <ul>
                <li><a>Home</a></li>
                <li><a>Quote</a></li>
                <li><a>Resturants</a></li>
                <li><a>Foods</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
        <div className="button-class">
            <span>Get Started</span>
        </div>
        
        </div>
        </div>
        </>
    )

}export default Header