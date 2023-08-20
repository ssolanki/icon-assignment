import { useEffect, useRef, useState } from "react"
import { Section,  Heading } from "./styles"

function HorizontalContent() {
    const [left, setLeft] = useState(0)
    const innerRef = useRef(null)
    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    function onScroll() {
        const rect = innerRef.current.getBoundingClientRect()
        const yPosition = rect.y
        const ratio = window.innerWidth/window.innerHeight
        const left = window.innerWidth - (yPosition) * ratio
        setLeft(2 * left)
    }
    return (
        <Section ref={innerRef}>
            <Heading style={{ marginLeft: `calc(100vw - ${left}px)`}}>Our company is suited to</Heading>
        </Section>
    )
}

export default HorizontalContent