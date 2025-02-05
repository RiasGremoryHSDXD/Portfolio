interface UserGrettingProps
{
    isLoggedIn?: boolean;
    username?: string;
    password?: string;
}


function UserGretting(
{
    isLoggedIn = false,
    username = "Guest",
    password = "Guest"
}:UserGrettingProps
) {
  if(isLoggedIn)
  {
    return <h1>Welcome back, {username} and your password is: {password}</h1>;
  }
  else
  {
    return <h1>Please sign up.</h1>;
  }
}

export default UserGretting;