import DeliveryForm from "./components/DeliveryForm"
import DeliveryList from "./components/DeliveryList"
import { useState } from "react"
function App() {
  const [deliveryList,setDeliveryList] = useState([{customerName: "FIdel",
    productName: 
    "Mkate",
    quantity
    : 
    "12"},{customerName
      : 
      "Fidel",
      productName
      : 
      "CAkes",
      quantity
      : 
      "34"}])
  const handleFormSubmit = (inputs) => {
    console.log(inputs)
    setDeliveryList((prevList) => [...prevList,inputs])
    console.log(deliveryList)

  }

  return (
    <>
      <div className=" bg-black text-white min-h-screen w-screen p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Delivery Note System</h1>
        <DeliveryForm handleFormSubmit={handleFormSubmit} />
        <DeliveryList deliverynotes={deliveryList}/>
      </div>
    </>
  )
}

export default App