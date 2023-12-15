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
        <form className="" onSubmit={handleSubmit}>
            <h3>Delivery Note</h3>
            {/* Capture the customer name, product name, and quantity in their respective input fields */}
            <label>Customer Name</label>
            <input className=" block" placeholder="Customer Name" type="text"  onChange={setOnChange} name="customerName"></input>
            <label>Product Name</label>
            <input className=" block" placeholder="Enter Product Name" type="text"  onChange={setOnChange} name="productName"></input>
            <label>Quantity</label>
            <input className=" block" placeholder="Enter an integer" type="text"  onChange={setOnChange} name="quantity"></input>
            <button className=" border-2" type="submit">Submit</button>
        </form>

    )
}

export default DeliveryForm