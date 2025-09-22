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

    }

    //test
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

    render() {
        return (
            <div className='note-input'>
                <form action="">
                    <div className='note-input__limit'>
                        <p className='note-input__limit__error'>{this.state.error}</p> 
                        <p>Sisa karakter: {this.state.counter}</p>   
                    </div>
                    <input type="text" placeholder='Ini adalah judul...' value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                    <textarea name="" id="" placeholder='Tuliskan catatanmu di sini...' ></textarea>
                    <button type='submit'>Buat</button>
                </form>    
            </div>
        )
    }
}

export default InputBody