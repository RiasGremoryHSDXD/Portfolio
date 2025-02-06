interface UserGetting
{
  is_student?: boolean;
  student_name?: string;
  student_age?: number;
  student_address?: string;
  student_course?: string;
  student_section?: string;
}

function UserGetting(
  {
    is_student = false,
    student_name = "NULL",
    student_age = 0,
    student_address = "NULL",
    student_course = "NULL",
    student_section = "NULL"
  }:UserGetting
)
{
  if(is_student)
  {
    return(
      <div className="card_container">
        <h2>{student_name}</h2>
        <h3>{student_age}</h3>
        <h3>{student_address}</h3>
        <h3>{student_course}</h3>
        <h3>{student_section}</h3>
      </div>
    );
  }
  else
  {
    return
    {
      <div className="card_container">
        <h1>This is not a student</h1>
      </div>
    }
  }
}

export default UserGetting