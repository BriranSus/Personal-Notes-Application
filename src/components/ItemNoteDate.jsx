function ItemNoteDate({ createdAt }){
    return (
        <div className="note-item__date">
            <p>{createdAt}</p>
        </div>
    )
}

export default ItemNoteDate;