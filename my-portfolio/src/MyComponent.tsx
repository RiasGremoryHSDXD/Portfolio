import { useState } from "react"

function MyComponent()
{
    let [name, setName] = useState()
    let [age, setAge] = useState()
    let [address, setAddress] = useState()
    let [payment, setPayment] = useState()
    let [mode_of_delivery, setDelivery] = useState()

    const updateName = (event:any)=> setName(event.target.value)
    const updateAge = (event:any) => setAge(event.target.value)
    const updateAddress = (event:any) => setAddress(event.target.value)
    const updatePaymentMethod = (event:any) => setPayment(event.target.value)
    const updateDeliveryMethod = (event:any) => setDelivery(event.target.value)

    return(
        <>
            <input type="text" onChange={updateName}/>
            <p>Name: {name}</p>

            <input type="number" onChange={updateAge}/>
            <p>Age: {age}</p>

            <input type="text" onChange={updateAddress} />
            <p>Address: {address}</p>

            <select onChange={updatePaymentMethod}>
                <option value="No payment been selected">Select Option</option>
                <option value="Master Card">Master Card</option>
                <option value="Visa">Visa</option>
                <option value="Gcash">Gcash</option>
            </select>
            <p>Payment method: {payment}</p>

            <input type="radio" value="Pick Up" checked={mode_of_delivery === "Pick Up"} onChange={updateDeliveryMethod}/>
            <input type="radio" value='Delivery' checked={mode_of_delivery === "Delivery"} onChange={updateDeliveryMethod} />
            <p>Shipping method: {mode_of_delivery}</p>
        </>
    )
}

export default MyComponent