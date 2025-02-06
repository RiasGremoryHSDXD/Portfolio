import List from './List.tsx'

function App() {

  const fruits = [
    {id: 1, name: 'apple', calories: 95},
    {id: 2, name: 'orange', calories: 45},
    {id: 3, name: 'banana', calories: 105},
    {id: 4, name: 'coconut', calories: 150},
    {id: 5, name: 'pineapple', calories: 37}
  ];

  const vegetable  = [
    {id: 1, name: 'potato', calories: 95},
    {id: 2, name: 'cucumber', calories: 45},
    {id: 3, name: 'eggplant', calories: 105},
    {id: 4, name: 'pumkin', calories: 150},
    {id: 5, name: 'carrot', calories: 37}
  ]

  return(
    <>
      <div className='container'>
        {fruits.length > 0 && <List list={fruits} category='Fruits'/>}
        {fruits.length > 0 && <List list={vegetable} category='Vegetable'/>}
      </div>
    </>
  )
}

export default App
