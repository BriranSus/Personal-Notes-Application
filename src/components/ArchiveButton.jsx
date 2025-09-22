function ArchiveButton({ id, onArchive, archived }) {
    return (
        <button 
            className="note-item__archive-button" 
            onClick={() => {
                onArchive(id)
        }}>
            {
                !archived ? "Archive" : "Pisahkan"
            }
        </button>
    )
}

export default ArchiveButton