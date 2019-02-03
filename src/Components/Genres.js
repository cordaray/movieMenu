import React, {Component} from 'react';
import {getGenres} from '../services/fakeGenreService';

class Genres extends Component {


    render(){

        const {genres, currentGenre} = this.props;

        return (
            <div>
            <ul className="list-group">
            <li className={currentGenre === 'allGenres' ? "list-group-item active" : "list-group-item"}  onClick={()=>this.props.onGenreChange("allGenres")}>All Genres</li>
            {
            genres.map(genre =><li className={currentGenre === genre.name ? "list-group-item active" : "list-group-item"} onClick={()=>this.props.onGenreChange(genre.name)}>{genre.name} </li>)
            }
            </ul>
            </div>
        );


    }



}

export default Genres;