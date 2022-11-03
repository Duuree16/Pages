import React from "react"
import './review.css'
import { FaStar } from "react-icons/fa"
import img from "../imgs/Drake.webp"


export const Review = (props) => {
    let arr = [0, 0, 0, 0, 0]
    for (let i = 0; i < props.rate; i++) {
        arr[i] = 1
    }
    return <><div className="Container">
        {
            arr.map((el, ind) => {
                return <FaStar className={"star" + el} />
            })
        }

        <h2 className="text">{props.text}</h2>
        <img src={img} className="drake" />
        <h2 className="name">Drake Klassen</h2>
    </div>
    </>
}