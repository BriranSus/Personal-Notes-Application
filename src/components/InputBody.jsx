import React from 'react'

class InputBody extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            id: '',
            title: '',
            body: '',
            counter: 50,
            error: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

    }

    onTitleChangeEventHandler(event){
        const input = event.target.value;
        const limit = 50;

        if (input.length <= limit){
            this.setState(() => {
                return {
                    title: input,
                    counter: limit - input.length,
                    error: '',
                }
            })
        }else if (input.length >= limit){
            this.setState(() => {
                return {
                    error: "Sudah melebihi limit"
                }
            })
        }   
    }

    onBodyChangeEventHandler(event){
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState(() => {
            return {
                id: '',
                title: '',
                body: '',
                counter: 50,
                error: '',
            }
        })
    }

    render() {
        return (
            <div className='note-input'>
                <form action="" onSubmit={this.onSubmitEventHandler}>
                    <div className='note-input__limit'>
                        <p className='note-input__limit__error'>{this.state.error}</p> 
                        <p>Sisa karakter: {this.state.counter}</p>   
                    </div>
                    <input type="text" placeholder='Ini adalah judul...' value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                    <textarea name="" id="" placeholder='Tuliskan catatanmu di sini...' value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                    <button type='submit'>Buat</button>
                </form>    
            </div>
        )
    }
}

export default InputBody