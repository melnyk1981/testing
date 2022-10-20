import React, { useEffect } from 'react';
import {useState} from 'react';



function Header() {

    const [output, setOutput] = useState([
        {
            "buy" : "", "sale" : ""
        },
        {
            "buy" : "", "sale" : ""
        },
    
    ]);

    
   function btn1() {
    
            fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', {
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setOutput(data);

            });
   }
    useEffect(
        () => {
            btn1();
        },
        []
    );           
      
    
    return(
    <div className='head_div'>
        <div className='usd'>
            &#36;&nbsp;{(+output[0].buy).toFixed(2)}&nbsp;/&nbsp;{(+output[0].sale).toFixed(2)}
        </div>
        <div className='eur'>
            &euro;&nbsp;{(+output[1].buy).toFixed(2)}&nbsp;/&nbsp;{(+output[1].sale).toFixed(2)}
        </div>
    </div>
    );
}

export default Header;