interface List
{
    list: any[];
    category: string;
}


function List(
    { 
        list,
        category = 'NULL'
    }:List
)
{

    const itemList = list.map(item => <li key={item.id}>{item.name.toUpperCase()}</li>)
    return(
        <>
            <h2 className="list-category">{category}</h2>
            <ul className="list-item">{itemList}</ul>
        </>
    )
}

export default List