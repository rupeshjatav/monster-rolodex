import React from "react";
import './card-list.styles.css';
import { Card } from "../card/card.component";

export const Cardlist = (props) => {
    return (

        <div className='card-list'>{console.log(props)}{props.monsters.map((item) => <Card key={item.id}
            monster={item}></Card>)}</div>
    )
}

export default Cardlist