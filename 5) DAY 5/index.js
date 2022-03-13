// ReactDOM.render(<h1>Hello, Everyone</h1>, document.getElementById("root"))

// ReactDOM.render(<p>Hello, My name is Vignesh</p>, document.getElementById("root"))

// ReactDOM.render(<ul><li>Vignesh</li><li>Venkatesh</li></ul>, document.getElementById("root"))

// //Creating your own component
// function MainContent() {
//     return (
//         <h1>I'm learning React</h1>
//     )
// }
// ReactDOM.render(
//     <div>
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )

// // This is the Javascript way to write the above code
// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)


// // JSX Format
// const element = <h1 className = "header">This is JSX</h1>
// console.log(element)
// ReactDOM.render(element, document.getElementById("root"))

// // More Code in the JSX Format
// const page = (
//     <div>
//         <h1 className = "header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))

// Creating a navbar in JSX

const navbar = (
    <nav>
        <h1>IIIGIV Codes</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))