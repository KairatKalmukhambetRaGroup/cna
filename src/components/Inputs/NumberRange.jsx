
const NumberRange = ({name='', label='', value, param, handleChange, labeled=false}) => {
    const numberRearange = (num) => {
        if(num){
            var parts = num.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            num = parts.join(".");       
            return num; 
        }
        return num;
    }

    const onChange = (e) => {
        e.preventDefault();
        let pref = e.currentTarget.dataset.pref;
        let val = e.currentTarget.value.replace(/\s+/g, '');
        let vl = '';
        for (let index = 0; index < val.length; index++) {
            const element = val[index];
            if((Number(element) >=0 && Number(element) <= 9) || '.')
                vl += element;
        }
        handleChange(name, {...value, [pref]: vl});
    }
    return (
        <div className={`input number-range ${labeled ? 'labeled' : ''}`}>
            {label && (
                <label >{label}</label>
            )}
            <input type="text" name={`${name}1`} data-pref="from" placeholder="от" value={numberRearange(value.from)} onChange={onChange} />
            <div className="hl"></div>
            <input type="text" name={`${name}2`} data-pref="to" placeholder="до" value={numberRearange(value.to)} onChange={onChange} />
            {param && (
                <label className="last">{param==='м2' ? <>м<sup>2</sup></> : param}</label>
            )}
        </div>
    );
};

export default NumberRange;