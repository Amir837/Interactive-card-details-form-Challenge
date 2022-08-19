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

function App() {
    const [formInfo, setFormInfo] = useState<CardInfo>({
        holderName: "hahaha",
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
            <CreditCard {...formInfo}/>
            {confirmed ? <CardAdded /> : <Form dataParaser={setFormInfo} info={formInfo}/>}
            <button onClick={handleClick}>{confirmed ? "continue" : "confirm"}</button>
        </div>
    );
}

export default App;
