import InputBody from './InputBody'
import React from 'react'
import { getInitialData, showFormattedDate } from '../utils/index'
import ItemList from './ItemList'
import ArchiveList from './ArchiveList'

class AppBody extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: getInitialData(),
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }

    onAddNoteHandler({ title, body }){
        this.setState((prevState) => {
            return {
                items: [
                    ...prevState.items, {
                        id: +new Date(),
                        title,
                        body, 
                        createdAt: showFormattedDate(new Date()),
                        archived: false,
                    }
                ]
            }
        })
    }

    onDeleteHandler(id){
        const items = this.state.items.filter(item => item.id !== id);
        this.setState({ items })
    }

    onArchiveHandler(id){
        this.setState((prevState) => {
            return {
                items: prevState.items.map((note) => 
                    note.id === id ? { ...note, archived: !note.archived } : note
                )    
            }
            
        })
    }

    render() {
        const notesList = this.state.items.filter((item) => !item.archived)
        const notesArchived = this.state.items.filter((item) => item.archived)
        return (
            <div className='note-app__body'>
                <h2>Buat Catatan</h2>
                <InputBody addNote={this.onAddNoteHandler}></InputBody>
                <h2>Catatan Aktif</h2>
                <ItemList items={notesList} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
                <h2>Arsip</h2>
                <ArchiveList items={notesArchived} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} archived={item.archived}/>
            </div>
        )
        
    }
}

export default AppBody;