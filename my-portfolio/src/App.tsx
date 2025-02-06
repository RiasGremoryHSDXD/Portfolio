import StudentInfo from './UserGretting.tsx'


function App() {
  return(
    <>
      <div className='Container'>
      <StudentInfo
        is_student = {true}
        student_name='James Christopher C. Tagupa'
        student_age={20}
        student_address='Mindanao Homes'
        student_course='Bachelor of Science of Technology'
        student_section = 'IT2R2'
      />

      <StudentInfo
        is_student = {true}
        student_name='James Christopher C. Tagupa'
        student_age={20}
        student_address='Mindanao Homes'
        student_course='Bachelor of Science of Technology'
        student_section = 'IT2R2'
      />

     <StudentInfo
        is_student = {true}
        student_name='James Christopher C. Tagupa'
        student_age={20}
        student_address='Mindanao Homes'
        student_course='Bachelor of Science of Technology'
        student_section = 'IT2R2'
      />

      <StudentInfo
        is_student = {true}
        student_name='James Christopher C. Tagupa'
        student_age={20}
      />
      
      <StudentInfo
        is_student = {true}
      />
      </div>
    </>
  )
}

export default App
