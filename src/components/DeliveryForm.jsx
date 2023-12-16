import { useState } from "react";

const DeliveryForm = ({handleFormSubmit}) => {
    // State to store the customer name, product name, and quantity
    const [inputs, setInputs] =useState({})
    // On submit function
    const handleSubmit = (e) => {
        e.preventDefault()
        handleFormSubmit(inputs)
    }
    // Function to update the state of the input fields on trigger of the change event using destructuring
    const setOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs((values) => ({...values,[name]: value}))
    }
    return(
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4">Create Delivery Note</h2>
            {/* Capture the customer name, product name, and quantity in their respective input fields */}
            <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerName">
            Customer Name
            </label>            
            <input className="w-full p-2 border rounded" required placeholder="Customer Name" type="text"  onChange={setOnChange} name="customerName"></input>

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerName">
            Product Name
            </label>
            <input className="w-full p-2 border rounded" required placeholder="Enter Product Name" type="text"  onChange={setOnChange} name="productName"></input>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerName">
            Quantity</label>
            <input className="w-full p-2 border rounded" required placeholder="Enter an integer" type="text"  onChange={setOnChange} name="quantity"></input>
            <button className=" border-2" type="submit">Submit</button>

            </div>
        </form>

    )
}

export default DeliveryForm