
import PropTypes from 'prop-types';
const PriceOption = ({option}) => {
    const {name,price} = option;
    
    
    return (
        <div>
            <h2>{name}</h2>
            <h2>{price}</h2>

        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object.isRequired
};
export default PriceOption;