import styles from './Display.module.css';
import React, {useState} from 'react';

function Display(){

    const [num, setNum] = useState(0);
    const [loan, setLoan] = useState();
    const [down, setDown] = useState();
    const [months, setMonths] = useState();
    const [interest, setInterest] = useState();

    const calculatePayment = () => {
        setNum(((loan - down) * ((interest / 100) / 12)) / (1 - (1 + ((interest / 100) / 12))**(-months)))
    }

    const getLoan = (e) => {
        setLoan(e.target.value)
    }

    const getDown = (e) => {
        setDown(e.target.value)
    }

    const getMonths = (e) => {
        setMonths(e.target.value)
    }

    const getInterest = (e) => {
        setInterest(e.target.value)
    }

    return(
        <>
        <div className={styles.Display}>
        <input disabled placeholder='Loan Ammount'></input>
        <span><input placeholder='30000' type='number' value={loan} onChange={getLoan}></input></span>
        <br></br>
        <input disabled placeholder='Down Payment'></input>
        <span><input placeholder='10000' type='number' value={down} onChange={getDown}></input></span>
        <br></br>
        <input disabled placeholder='Term in Months'></input>
        <span><input placeholder='60' type='number' value={months} onChange={getMonths}></input></span>
        <br></br>
        <input disabled placeholder='Interest Rate'></input>
        <span><input placeholder='5.9' type='number' value={interest} onChange={getInterest}></input></span>
        <br></br>
        </div>


        <div className={styles.DisplayFooter}>
            <button onClick={calculatePayment}>Calculate</button>
            <div>
                <footer>
                    Your monthly payment is ${num.toFixed(2)} 
                    <br></br>
                    Total payment is ${num !== 0 ? (num * months).toFixed(2) : '0.00'}
                </footer>
            </div>
        </div>
        </>
    );
}

export default Display