import ItemNote from "./ItemNote";

function ItemList({ items, onDelete, onArchive, createdAt }) {
    const itemsLength = items.length

    return (
        <>
            {
                (itemsLength != 0)  ? <div className="notes-list">
                    {
                        items.map((item) => (
                            <ItemNote key={item.id} id={item.id} onDelete={onDelete} createdAt={createdAt} onArchive={onArchive} {...item}/>
                        ))
                    }
                </div> : <p className="notes-list__empty-message">Tidak ada catatan</p> 
            }  
        </>
        
    )
}

export default ItemList;