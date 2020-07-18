import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class StartPage extends Component {

    render(){
        return(
            <div className="start">
                <h1>iQTest</h1>
                <p>Welcome to iQTest, you have 60 seconds to answer 10 questions....GOODLUCK</p>
                <Link to="/Questionpage" className="Link" >Start</Link>
            </div>
        )
    }
}

export default StartPage;