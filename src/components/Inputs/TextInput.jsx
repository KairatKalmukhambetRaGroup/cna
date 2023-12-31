
const TextInput = ({name='', placeholder='', label='', value='', handleChange}) => {
    const onChange = (e) => {
        e.preventDefault();
        handleChange(e.currentTarget.name, e.currentTarget.value);
    }
    return (
        <div className="input text-input">
            {label && (
                <label>{label}</label>
            )}
            <input type="text" name={name} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
};

export default TextInput;