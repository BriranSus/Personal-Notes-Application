import Search from '../assets/search.png'

function Navbar() {
    return (
        <>
            <div className="note-app__header">
                <h1>Personal Notes</h1>    
                <form action="text">
                    <input type="text" placeholder="Cari Catatan" />
                </form>
            </div>
        </>
    )
}

export default Navbar;