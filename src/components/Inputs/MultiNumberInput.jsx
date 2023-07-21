
import '@/styles/inputs.scss';
import { useEffect, useState } from 'react';

const numbers = [1, 2, 3, 4, 5];

const MultiNumberInput = ({name='', label='', value=[], handleChange}) => {
    const onChange = (e) => {
        e.preventDefault();
        const val = e.currentTarget.dataset.value;
        let tmp = [];
        if(!Array.isArray(value)){
            tmp.push(Number(value));
        }else{
            tmp = [...value];
        }
        if(tmp.includes(Number(val))){
            tmp = tmp.filter((el)=>Number(el) !== Number(val));
        }else{
            tmp.push(Number(val));
        }
        handleChange(name, tmp);
    }
    
    return (
        <div className="input multinumber">
            <div className="numbers">
                {numbers.map((number, key)=>(
                    <div className={`number ${value.includes(Number(number)) ? 'active' : ''}`} key={key} data-value={number} onClick={onChange}>
                        {number}
                    </div>
                ))}
            </div>
            <label>{label}</label>
        </div>
    );
};

export default MultiNumberInput;