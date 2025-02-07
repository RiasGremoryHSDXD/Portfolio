
function Picture()
{

    const handleClick = (e:any) => {
        e.target.style.display = 'none'
    }

    return(
        <>
            <button onClick={(e) => handleClick(e)}>WEW</button>

        </>
    )
}

export default Picture