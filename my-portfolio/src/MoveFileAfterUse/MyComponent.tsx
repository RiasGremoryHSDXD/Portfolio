import { useState } from "react"

function MyComponent()
{
    let [name, setName] = useState()
    let [age, setAge] = useState()
    let [address, setAddress] = useState()
    let [payment, setPayment] = useState()
    let [mode_of_delivery, setDelivery] = useState()
    let [gender, setGender] = useState()

    const updateName = (event:any)=> setName(event.target.value)
    const updateAge = (event:any) => setAge(event.target.value)
    const updateAddress = (event:any) => setAddress(event.target.value)
    const updatePaymentMethod = (event:any) => setPayment(event.target.value)
    const updateDeliveryMethod = (event:any) => setDelivery(event.target.value)
    const updateGender = (event:any) => setGender(event.target.value)

    return(
        <div className="container">

            <input type="text" onChange={updateName}/>
            <p>Name: {name}</p>

            <input type="number" onChange={updateAge}/>
            <p>Age: {age}</p>

            <label>
                <input type="radio" value='Male' checked={gender === "Male"} onChange={updateGender} />
                <span>Male</span>
            </label>
            <label>
                <input type="radio" value='Female' checked={gender === "Female"} onChange={updateGender} />
                <span>Female</span>
            </label>
            <p>Gender: {gender}</p>


            <input type="text" onChange={updateAddress} />
            <p>Address: {address}</p>

            <select onChange={updatePaymentMethod}>
                <option value="No payment been selected">Select Option</option>
                <option value="Master Card">Master Card</option>
                <option value="Visa">Visa</option>
                <option value="Gcash">Gcash</option>
            </select>
            <p>Payment method: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={mode_of_delivery === "Pick Up"} onChange={updateDeliveryMethod}/>
                <span>Pick Up</span>
            </label>

            <label>
                <input type="radio" value='Delivery' checked={mode_of_delivery === "Delivery"} onChange={updateDeliveryMethod} />
                <span>Delivery</span>
            </label>
            <p>Shipping method: {mode_of_delivery}</p>
        </div>
    )
}

export default MyComponent