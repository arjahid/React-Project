import { CiCircleCheck } from "react-icons/ci";
import PropTypes from 'prop-types';
const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center"><CiCircleCheck className="text-green-500 ml-4 mr-2  " />{feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string.isRequired
};
export default Feature;