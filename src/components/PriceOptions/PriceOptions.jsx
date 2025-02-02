import PriceOption from "../Priceopt/PriceOption";



const PriceOptions = () => {
   const priceOptions= [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 20,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Open during regular hours"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 40,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Extended gym hours",
            "One free personal training session per month"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 60,
          "currency": "USD",
          "features": [
            "24/7 gym access",
            "Unlimited group fitness classes",
            "Locker room with private showers",
            "Two free personal training sessions per month",
            "Nutritional guidance"
          ]
        },
        {
          "id": 4,
          "name": "VIP Plan",
          "price": 100,
          "currency": "USD",
          "features": [
            "24/7 gym access",
            "Unlimited group fitness classes",
            "Exclusive VIP lounge",
            "Private training sessions",
            "Sauna and spa access",
            "Custom workout and diet plan",
            "Free gym merchandise"
          ]
        }
      ]
      
    return (
        <div className="m-12">
            <h2 className="text-3xl">Best prices</h2>
           <div className="grid md:grid-cols-3 gap-6">
           {
            priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
           }
           </div>
        </div>
    );
};

export default PriceOptions;