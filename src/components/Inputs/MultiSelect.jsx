'use client'
import React from 'react';
import '@/styles/inputs.scss';

const MultiSelect = ({name='', placeholder=null, label='', value=[], options=[], handleChange, labeled=false}) => {
    const [open, setOpen] = React.useState(false);
    const onChange = (e) => {
        e.preventDefault();
        const val = e.currentTarget.dataset.value;
        if(!val){
            handleChange(name, []);
        }else{
            let tmp = []
            if(!Array.isArray(value)){
                tmp.push(value);
            }else{
                tmp = [...value];
            }
            if(tmp.includes(val)){
                tmp = tmp.filter((el)=>el !== val);
            }else{
                tmp.push(val);
            }
            handleChange(name, tmp);
        }
        setOpen(false);
    }
    const toggleOptions = (e) => {
        setOpen(!open);
    }
    return (
        <div className={`input multiselect ${labeled ? 'labeled' : ''}`}>
            <label>{label}</label>
            <div className="select">
                <div className="selected" onClick={toggleOptions}>
                    <span className='val'>
                        {(value && value.length>0) ? 
                            Array.isArray(value) ? value.join(', ') : value 
                            : placeholder}
                    </span>
                    <i></i>
                </div>
                <div className={`options ${open ? 'active' : ''}`}>
                    {placeholder && (
                        <div className={`option ${value && value.length>0 ? '' : 'active'}`} data-value={null} onClick={onChange} >
                            {placeholder}
                        </div>
                    )}
                    {options && options.length > 0 && options.map((option, key)=>(
                        <div className={`option ${value.includes(option) ? 'active' : ''}`} data-value={option} key={key} onClick={onChange} >
                            <i className="checkbox"></i> {option}
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    );
};

export default MultiSelect;