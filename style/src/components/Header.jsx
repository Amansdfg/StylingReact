import logo from "../assets/logo.png";
function Header(){
    return(
        <header>
            <img src={logo} alt="logo"/>
            <h1>ReactArt</h1>
            <p>A community of artists and art-lovers.</p>
        </header>
    )
}
export default Header;