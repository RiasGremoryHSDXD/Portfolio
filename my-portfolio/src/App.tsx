import Student from "./Student/Student.tsx"
import profile_pic from './assets/Rias_gremory.jpg';


function App() {
  return(
    <>
      <Student
      age= {20}
      section="BSIT-3A"
      />
      <Student 
      profile = {profile_pic}
      name="Rias Gremory"
      age={20}
      section="BSIT-3A"
      />
    </>
  )
}

export default App
