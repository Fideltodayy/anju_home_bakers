import React, { useState } from 'react';
import DeliveryForm from './components/DeliveryForm';
import DeliveryList from './components/DeliveryList';

function App() {
  const [deliveryNotes, setDeliveryNotes] = useState([]);
  const [isClicked, setIsClicked] = useState(false)

  const handleFormSubmit = (deliveryNote) => {
    console.log('Delivery Note:', deliveryNote);
    setDeliveryNotes([...deliveryNotes, deliveryNote]);
    setIsClicked(!isClicked)
  };
   console.log(isClicked)
  return (
    <div className="bg-gray-100 min-h-screen  ">
      <div className="bg-[url('/closeupbakery.jpeg')] bg-cover bg-left-top">
      <h1 className="text-3xl mb-8 text-center font-noto font-thin uppercase" >Anju Home Bakers</h1>
      {
        isClicked ? <DeliveryForm onFormSubmit={handleFormSubmit} /> :
        <div className=' flex justify-center items-center'>
          <button  
          className=" m-auto bg-blue-500 text-white p-2 rounded hover:bg-blue-800 transition duration-300 mt-4"
          onClick={() => setIsClicked(!isClicked)}
          >
            Create A Delivery Note
          </button>
        </div>
      }
      </div>
      
      <DeliveryList deliveryNotes={deliveryNotes} />
    </div>
  );
}

export default App;