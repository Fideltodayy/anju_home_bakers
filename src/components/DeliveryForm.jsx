import { useState } from "react";

const DeliveryForm = ({onFormSubmit}) => {
    // State to store the customer name, product name, and quantity
    const [inputs, setInputs] =useState({})
    // On submit function
    const handleSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(inputs)
        // Clear form fields
        setInputs({})
    }
    // Function to update the state of the input fields on trigger of the change event using destructuring
    const setOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs((values) => ({...values,[name]: value}))
    }
    return(
        <form className=" bg-gray-100 max-w-md mx-auto" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4">Create Delivery Note</h2>
            {/* Capture the customer name, product name, and quantity in their respective input fields */}
            <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerName">
            Customer Name
            </label>            
            <input className="w-full p-2 border rounded" required placeholder="Customer Name" type="text"  onChange={setOnChange} name="customerName"></input>

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerName">
            Product Name
            </label>
            <input className="w-full p-2 border rounded" required placeholder="Enter Product Name" type="text"  onChange={setOnChange} name="productName"></input>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unitPrice">
            Unit Price
            <select
            onChange={setOnChange}
            name="currency"
            defaultValue={"KES"}
            >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="KES">KES</option>
            {/* Add more currency options as needed */}
            </select>
            </label>
            
            <input
            className=" w-full p-2 border rounded"
            required
            placeholder="Enter the unit price"
            type="number"
            onChange={setOnChange}
            name="unitPrice"
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerName">
            Quantity</label>
            <input className="w-full p-2 border rounded" required placeholder="Enter an integer" type="text"  onChange={setOnChange} name="quantity"></input>
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800 transition duration-300 mt-4"
            >
                Create Delivery Note
            </button>
            </div>
        </form>

    )
}

export default DeliveryForm