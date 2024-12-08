function Footer () {
    return(
        // We can enter some JavaScript (TS) code within a component, just put it in curly braces!
        <footer>
            <p>&copy; {new Date().getFullYear()} Website do João</p> 
        </footer>
    );
}

export default Footer;