import { useEffect } from "react"
import { useState } from "react"

export default function CardInfo() {

    const [fact, setFact] = useState("")

    async function fetchFact(){
        const url = "https://catfact.ninja/fact";
        const res = await fetch(url)
        const jsonFact = await res.json()
        setFact(jsonFact)
    }

    useEffect(() => {
        fetchFact()
    }, [])

    return (
        <div className="card-info">
            <p>{ fact.fact }</p>
            <button className="btn-info" onClick={fetchFact} onKeyUp={(event) => {event.key === 'Enter' ? fetchFact : console.log("erro")}}>New Information</button>
        </div>
    )
}