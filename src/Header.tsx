// This is a header component, we should import it on the Main file (app)

function Header() {
    return(
        <header>
            <h1>Meu Website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Sobre nós</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header