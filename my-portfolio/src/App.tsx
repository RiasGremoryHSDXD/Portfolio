import UserGretting from "./UserGretting.tsx";

function App() {
  return(
    <>
      <UserGretting 
      isLoggedIn={true} 
      username="John Doe" 
      password="password123" 
      />

      <UserGretting 
      isLoggedIn={false} 
      username="John Doe" 
      password="password123" 
      />
    </>
  )
}

export default App
