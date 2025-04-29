// wrap the whole application

export default function Layout(props) {

    const { children } = props

    const header = (
        <header>
            <h1 className="text-gradient">The FitProgram</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built by <a href="https://www.yuliaouyang.com" 
            target="_blank">Yuni</a><br/>
            Styled with <a 
            href="https://www.fantacsss.smoljames.com" target="_blank">FantaCSS</a> 
            </p>
        </footer>
    )

    //https://www.yuliaouyang.netlify.app"

    return (
        <>
           {header}
           {children}
           {footer}
        </>
    )
}