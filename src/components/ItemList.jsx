import ItemNote from "./ItemNote";

function ItemList({ items, onDelete, onArchive }) {
    return (
        <>
            <div className="notes-list">
                {
                    items.map((item) => (
                        <ItemNote key={item.id} id={item.id} onDelete={onDelete} onArchive={onArchive} {...item}/>
                    ))
                }
            </div>
        </>
        
    )
}

export default ItemList;