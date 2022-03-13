// const page = (
//     <div>
//         <img src="assets/react-logo.png" width="40px"></img>
//         <h1>Fun facts about React:</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )
function Header() {
    return (
        <header>
            <nav className="nav">
            <img src="assets/react-logo.png" className="nav-logo"></img>

            <ul className="nav-items">
                <li>Pricing</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer className="footer">
                <small>Made with 🧡 by Vignesh Venkatesh</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div className="body">
            <h1>Fun facts about React:</h1>

            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>

        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />

            <MainContent />

            <Footer />
            
        </div>
    )
}

ReactDOM.render(<Page />,document.getElementById("root"))