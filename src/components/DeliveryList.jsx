const DeliveryList = ({deliverynotes}) => {
    console.log(deliverynotes)
    return(
        <div className="max-w-md mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-4">Delivery Notes</h2>
        <ul>
          {deliverynotes.map((note) => (
            <li key={note.id} className="border-b py-2">
              <p className="font-semibold">{note.customerName}</p>
              <p>{`Product: ${note.productName}, Quantity: ${note.quantity}`}</p>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default DeliveryList