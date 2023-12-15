const DeliveryList = ({deliverynotes}) => {
    console.log(deliverynotes)
    return(
        <div>
            {deliverynotes.map((list) => (
                <div >
                    <h4>
                    {list.customerName}
                    </h4>
                    <h4>
                        {list.productName}
                    </h4>
                    <h4>
                        {list.quantity}
                    </h4>
                </div>
            ))}
        </div>
    )
}

export default DeliveryList