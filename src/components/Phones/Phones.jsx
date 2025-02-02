import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Audio,Circles } from 'react-loader-spinner'
const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
            .then(res => res.json())
            .then(data => {
                const phoneData = data.data.map(phone => ({
                    name: phone.phone_name,
                    value: Math.floor(Math.random() * 100) // Random value for demonstration
                }));
                setPhones(phoneData);
                setLoading(false);
            });
    }, []);

    return (
        <div>
     {loading &&
        <div className="items-center">
             <Audio
               height="80"
               width="80"
               radius="9"
               color="green"
               ariaLabel="three-dots-loading"
               wrapperStyle
               wrapperClass
             />
        </div>
     }
     <div className="flex justify-center items-center">
        
  render(<Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />)
     </div>
            <h2>Phone count: {phones.length}</h2>
            <BarChart width={550} height={400} data={phones}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Phones;