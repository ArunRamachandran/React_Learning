import React from 'react';
import {render} from 'react-dom';
import LikeButton from './LikeButton.jsx';

class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    onLike () {
        this.setState({
            count: this.state.count + 1
        })
    }

    render () {
        return (
            <div>
                
                <div><button onClick={this.onLike.bind(this)}>Like Count</button></div>
                <LikeButton countValue={this.state.count}/>                
            </div>
        )
   }
}

render(<App/>, document.getElementById('app'));
