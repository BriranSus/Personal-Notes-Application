import { showFormattedDate } from '../utils/index'

function ItemNoteDate({ createdAt }){
    return (
        <div className="note-item__date">
            <p>{showFormattedDate(createdAt)}</p>
        </div>
    )
}

export default ItemNoteDate;