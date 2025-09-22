function Navbar({ onSearchHandler }) {
    return (
        <>
            <div className="note-app__header">
                <h1>Personal Notes</h1>    
                <form action="text">
                    <input type="text" placeholder="Cari Catatan" onChange={(state) => onSearchHandler(state.target.value)} />
                </form>
            </div>
        </>
    )
}

export default Navbar;