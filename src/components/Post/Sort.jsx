import { useEffect } from "react";

const Sort = ({formData, handleChange}) => {
    const handleClick = (e) => {
        e.preventDefault();
        const val = e.currentTarget.dataset.value;
        handleChange('sort', val);
    } 
    return (
        <div id="sort">
            Сначала:
            <span className={`${formData.sort == 'new' ? 'active' : ''}`} data-value='new' onClick={handleClick}>
                новые объявления
            </span>
            <span className={`${formData.sort == 'cheap' ? 'active' : ''}`} data-value='cheap' onClick={handleClick}>
                дешевые
            </span>
            <span className={`${formData.sort == 'expensive' ? 'active' : ''}`} data-value='expensive' onClick={handleClick}>
                дорогие
            </span>
        </div>
    );
}

export default Sort;