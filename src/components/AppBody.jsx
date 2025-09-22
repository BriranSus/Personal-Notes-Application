import InputBody from './InputBody'
import React from 'react'
import { getInitialData } from '../utils/index'
import ItemList from '../components/ItemList'

class AppBody extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: getInitialData(),
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onAddNoteHandler({ title, body }){
        this.setState((prevState) => {
            return {
                items: [
                    ...prevState.items, {
                        id: +new Date(),
                        title,
                        body, 
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div className='note-app__body'>
                <h2>Buat Catatan</h2>
                <InputBody addNote={this.onAddNoteHandler}></InputBody>
                <h2>Catatan Aktif</h2>
                <ItemList items={this.state.items}/>
            </div>
        )
        
    }
}

export default AppBody;