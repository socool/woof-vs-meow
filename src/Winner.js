import React from "react"
import "./Winner.css"
import cat from "./cat.svg"
import dog from "./dog.svg"

class Winner extends React.Component{
    render(){
        let winner = (
            <>
                <h1>Woof Wins!</h1>
                <img alt="dog" src={dog}/>
            </>
        );
        if(this.props.winner === "cat"){
            winner =(
                <>
                    <h1>Meo Wins!</h1>
                    <img alt="cat" src={cat}></img>
                </>
            )
        }
        return <div className="winner">{winner}</div>
    }
}

export default Winner;