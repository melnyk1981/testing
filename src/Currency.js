import React, { useEffect } from 'react';
import {useState} from 'react';


function Currency() {

    let sel1 = React.createRef();
    let sel2 = React.createRef();
    let cur1 = React.createRef();
    let cur2 = React.createRef();

     
    const [output, setOutput] = useState([]);
   
    function in1_func(){ //for first select and first input

        let select1 = sel1.current.value;
        let select2 = sel2.current.value;
        let currency1 = cur1.current.value;
        let currency2 = cur2.current.value;
        let usd_buy = output[0].buy;
        let eur_buy = output[1].buy;


        //only digits and point-sign
        if((((currency1[currency1.length-1])!=='0')
            &&((currency1[currency1.length-1])!=='1')
            &&((currency1[currency1.length-1])!=='2')
            &&((currency1[currency1.length-1])!=='3')
            &&((currency1[currency1.length-1])!=='4')
            &&((currency1[currency1.length-1])!=='5')
            &&((currency1[currency1.length-1])!=='6')
            &&((currency1[currency1.length-1])!=='7')
            &&((currency1[currency1.length-1])!=='8')
            &&((currency1[currency1.length-1])!=='9')
            &&((currency1[currency1.length-1])!=='.'))){

                cur1.current.value = currency1.substring(0, currency1.length-1);
                currency1 = cur1.current.value;
        }

        //only one point in numeber
        if((currency1[currency1.length-1] === ".")
            &&(currency1.indexOf(".") !== currency1.length-1)){
                cur1.current.value = currency1.substring(0, currency1.length-1);
                currency1 = cur1.current.value;
        }
            
        //only one zero behind point    
        if(currency1 === "00" && currency1.length === 2){
            currency1 = "0";
            cur1.current.value = "0";
        }

        //only 9 symbols in the input
        if(currency1.length >= 10){
            cur1.current.value = currency1.substring(0, 9);
            currency1 = cur1.current.value;
        }


        if((select1 === "USD" && select2 === "USD")
            ||(select1 === "EUR" && select2 === "EUR")
                ||(select1 === "UAH" && select2 === "UAH")){
            cur2.current.value = currency1;
        }
        if(select1 === "USD" && select2 === "EUR"){
            cur2.current.value = ((+currency1)*(+usd_buy)/(+eur_buy)).toFixed(2);
        }
        if(select1 === "EUR" && select2 === "USD"){
            cur2.current.value = ((+currency1)*(+eur_buy)/(+usd_buy)).toFixed(2);
        }
        if(select1 === "UAH" && select2 === "USD"){
            cur2.current.value = ((+currency1)/(+usd_buy)).toFixed(2);
        }
        if(select1 === "USD" && select2 === "UAH"){
            cur2.current.value = ((+currency1)*(+usd_buy)).toFixed(2);
        }
        if(select1 === "UAH" && select2 === "EUR"){
            cur2.current.value = ((+currency1)/(+eur_buy)).toFixed(2);
        }
        if(select1 === "EUR" && select2 === "UAH"){
            cur2.current.value = ((+currency1)*(+eur_buy)).toFixed(2);
        }
        

    }

    function in2_func(){ //for second select and second input


        let select1 = sel1.current.value;
        let select2 = sel2.current.value;
        let currency1 = cur1.current.value;
        let currency2 = cur2.current.value;
        let usd_buy = output[0].buy;
        let eur_buy = output[1].buy;

        //only digits and point-sign
        if((((currency2[currency2.length-1])!=='0')
            &&((currency2[currency2.length-1])!=='1')
            &&((currency2[currency2.length-1])!=='2')
            &&((currency2[currency2.length-1])!=='3')
            &&((currency2[currency2.length-1])!=='4')
            &&((currency2[currency2.length-1])!=='5')
            &&((currency2[currency2.length-1])!=='6')
            &&((currency2[currency2.length-1])!=='7')
            &&((currency2[currency2.length-1])!=='8')
            &&((currency2[currency2.length-1])!=='9')
            &&((currency2[currency2.length-1])!=='.'))){

                cur2.current.value = currency2.substring(0, currency2.length-1);
                currency2 = cur2.current.value;
        }

        //only one point in numeber
        if((currency2[currency2.length-1] === ".")
            &&(currency2.indexOf(".") !== currency2.length-1)){
                cur2.current.value = currency2.substring(0, currency2.length-1);
                currency2 = cur2.current.value;
        }
            
        //only one zero behind point    
        if(currency2 === "00" && currency2.length === 2){
            currency2 = "0";
            cur2.current.value = "0";
        }

        //only 9 symbols in the input
        if(currency2.length >= 10){
            cur2.current.value = currency2.substring(0, 9);
            currency2 = cur2.current.value;
        }

        
        if((select1 === "USD" && select2 === "USD")
            ||(select1 === "EUR" && select2 === "EUR")
                ||(select1 === "UAH" && select2 === "UAH")){
            cur1.current.value = currency2;
        }
        if(select2 === "USD" && select1 === "EUR"){
            cur1.current.value = ((+currency2)*(+usd_buy)/(+eur_buy)).toFixed(2);
        }
        if(select2 === "EUR" && select1 === "USD"){
            cur1.current.value = ((+currency2)*(+eur_buy)/(+usd_buy)).toFixed(2);
        }
        if(select2 === "UAH" && select1 === "USD"){
            cur1.current.value = ((+currency2)/(+usd_buy)).toFixed(2);
        }
        if(select2 === "USD" && select1 === "UAH"){
            cur1.current.value = ((+currency2)*(+usd_buy)).toFixed(2);
        }
        if(select2 === "UAH" && select1 === "EUR"){
            cur1.current.value = ((+currency2)/(+eur_buy)).toFixed(2);
        }
        if(select2 === "EUR" && select1 === "UAH"){
            cur1.current.value = ((+currency2)*(+eur_buy)).toFixed(2);
        }

    }

    
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
    <div className='converter_div'>
        <div className='converter'>
            <div className="curr1">
                <select className='select' ref={sel1} onChange={in1_func}> 
                    <option className='option' value="USD">USD</option>
                    <option className='option' value="EUR">EUR</option>
                    <option className='option' value="UAH">UAH</option>
                </select>
                <input type="text" className="currency"  ref={cur1} onInput={in1_func}/>
            </div>
            <div className="curr2">
               <select className='select' ref={sel2} onChange={in2_func}>
                    <option className='option' value="USD">USD</option>
                    <option className='option' value="EUR">EUR</option>
                    <option className='option' value="UAH">UAH</option>
                </select>
                <input type="text" className="currency"  ref={cur2} onInput={in2_func} /> 
            </div>
        </div>
    </div>
    );
}

export default Currency;