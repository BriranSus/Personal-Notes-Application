import ItemNoteTitle from "./ItemNoteTitle";
import ItemNoteBody from "./ItemNoteBody";
import ItemNoteDate from "./ItemNoteDate";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function ItemNote({ id, title, body, createdAt, onDelete, onArchive, archived }) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <ItemNoteTitle title={title}/>
                <ItemNoteDate createdAt={createdAt}/>
                <ItemNoteBody body={body}/>
            </div>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete}></DeleteButton>
                <ArchiveButton id={id} onArchive={onArchive} archived={archived}></ArchiveButton>
            </div>
            
        </div>
    )
}

export default ItemNote;