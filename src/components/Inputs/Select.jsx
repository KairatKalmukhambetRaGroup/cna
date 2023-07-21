'use client'
import React from 'react';
import '@/styles/inputs.scss';

const Select = ({mobile=false, name='', placeholder=null, label='', value='', options=[], handleChange, labeled=false}) => {
    const [open, setOpen] = React.useState(false);
    const onChange = (e) => {
        e.preventDefault();
        const val = e.currentTarget.dataset.value;
        handleChange(name, val);
        setOpen(false);
    }
    const toggleOptions = (e) => {
        setOpen(!open);
    }
    return (
        <div className={`input select ${labeled ? 'labeled' : ''} ${mobile ? 'mobile' : ''}`}>
            <label>{label}</label>
            <div className="select">
                <div className="selected" onClick={toggleOptions}>
                    <span className='val'>
                        {value ? value : placeholder}
                    </span>
                    <i></i>
                </div>
                <div className={`options ${open ? 'active' : ''}`}>
                    {placeholder && (
                        <div className={`option ${value === '' ? 'active' : ''}`} data-value={null} onClick={onChange} >
                            {placeholder}
                        </div>
                    )}
                    {options && options.length > 0 && options.map((option, key)=>(
                        <div className={`option ${option === value ? 'active' : ''}`} data-value={option} key={key} onClick={onChange} >
                            {option}
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    );
};

export default Select;