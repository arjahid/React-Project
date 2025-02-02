
import PropTypes from 'prop-types';

import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name,price,features} = option;
    
    
    return (
        <div className='bg-blue-500 text-white rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
           <div className='p-6 flex-grow'>
           {
                features.map(feature=><Feature key={feature} feature={feature}></Feature>)
            }
           </div>
           <button className='btn w-full bg-green-600 py-2 font-bold rounded-lg hover:bg-blue-700'>Buy NOw</button>
            

        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object.isRequired
};
export default PriceOption;