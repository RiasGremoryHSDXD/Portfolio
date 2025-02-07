
function Button()
{   

    let count_button_click = 0;

    const handleClicked = (name:string) =>
    {
        count_button_click++;
        if(count_button_click <= 3)
        {
            console.log(`${name}, you clicked ${count_button_click}`)
        }
        else
        {
            console.log(`Stop clicking Me! ${name}`)
            count_button_click = 0
        }

    }

    return(
        <button onClick={() => handleClicked('James')}>Clicked Me!</button>
    )
}

export default Button