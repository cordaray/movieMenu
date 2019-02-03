import React, {Component} from 'react';
import Movies from './Movies';

class Like extends Component {

    render () {

        return (
            <div>
                <i className={this.props.liked === true ? 'far fa-heart' : 'fas fa-heart'} onClick={this.props.togglelike}></i>
            </div>
        );

    }

}

export default Like;