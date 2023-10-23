import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Content() {
    const context = useContext(ThemeContext)

    return (
        <div className={context.theme}>
            <h1>Hell</h1>
        </div>
    )
}

export default Content