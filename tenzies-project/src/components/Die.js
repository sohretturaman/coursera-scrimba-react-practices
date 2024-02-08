import React from "react"

export default function Die(props) {
    console.log('props.value',props.value)
    const styles = {
        backgroundColor: props.held ? "#59E391" : "white",

    }
    return (
        <div className="die-face" onClick={props.hold} style={styles}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}
