import Navbar from './Navbar'
import AppBody from './AppBody'
import React from 'react'

class MainBody extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: "",
        };

        this.onSearchHandler = this.onSearchHandler.bind(this)
    }

    onSearchHandler(input){
        this.setState({ search: input })
    }

    render() {
        return (
            <>
                <Navbar onSearchHandler={this.onSearchHandler}/>
                <AppBody search={this.state.search}/>
            </>
        )    
    }
    
}

export default MainBody