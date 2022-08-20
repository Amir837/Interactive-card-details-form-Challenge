// Hooks
import { useState } from 'react';

// Components
import CreditCard from './Components/CreditCard';
import Form from './Components/Form';
import CardAdded from './Components/CardAdded';

// Interfaces
import { CardInfo } from './interfaces';

// CSS
import "./styles/App.css";

const mobile = require('./images/bg-main-mobile.png');
const desktop = require('./images/bg-main-desktop.png');

export default function App() {
    const [formInfo, setFormInfo] = useState<CardInfo>({
        holderName: "",
        cardNumber: "",
        month: "",
        year: "",
        cvc: ""
    });

    const [confirmed, setConfirmed] = useState<boolean>(false);

    const handleClick = () => {
        setConfirmed(!confirmed);
    }

    return (
        <div className="App">
            <picture>
                <source media="(max-width:850px)" srcSet={mobile}/>
                <img src={desktop}/>
            </picture>

            <CreditCard {...formInfo} />
            {confirmed ? <CardAdded /> : <Form dataParaser={setFormInfo} info={formInfo} />}
            <button onClick={handleClick}>{confirmed ? "continue" : "confirm"}</button>
        </div>
    );
}

