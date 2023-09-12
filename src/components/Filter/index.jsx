import ApartmentFilter from "./ApartmentFilter";
import ComercialFilter from "./ComercialFilter";
import HouseFilter from "./HouseFilter";

const Filter = ({prefix='', housing,cities, regions, formData, handleChange, handleSubmit}) => {
    if(housing === 'apartment')
        return <ApartmentFilter prefix={prefix} cities={cities} regions={regions} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    if(housing === 'house')
        return <HouseFilter prefix={prefix} cities={cities} regions={regions} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    if(housing === 'commercial')
        return <ComercialFilter prefix={prefix} cities={cities} regions={regions} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    
};

export default Filter;