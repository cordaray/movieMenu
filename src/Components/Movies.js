import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import Like from './Like';
import Pagination from './Pagination';
import {paginate} from '../scripts/Paginate';
import PropTypes from 'prop-types';
import Genres from './Genres';
import {getGenres} from '../services/fakeGenreService';

class Movies extends Component {

    state = {

        movies: getMovies(),

        genres: getGenres(),

        pageSize: 3,

        currentPage: 1,

        currentGenre: 'allGenres',

    }

    render ( ) {

        //renaming movies when destructuring
        
        return (

            <React.Fragment>
                <div className="container">
                <div className="row mt-4">
                <div className="col-2">
                <Genres genres={this.state.genres} currentGenre={this.state.currentGenre} onGenreChange={this.handleGenreChange}/>
                </div>
                <div className="col-8">
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Likes</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                       {this.printMovies()}
                </table>
                </div>
                </div>
                </div>
            </React.Fragment>

        );
    }

    printMovies(){

        const {movies: allMovies,pageSize,currentPage,currentGenre} = this.state;

        let movies = allMovies;

        if (currentGenre != "allGenres"){

             movies = movies.filter(movie => movie.genre.name == currentGenre);
        } 

        let moviesPagination = movies.length;

        movies = paginate(movies,pageSize,currentPage);


        movies = <tbody>{movies.map(movie => (
            <tr key={movie._id}>
                <td key={movie.title}>{movie.title}</td>
                <td key={movie.genre.name}>{movie.genre.name}</td>
                <td key={movie.numberInStock}>{movie.numberInStock}</td>
                <td><Like liked={movie.liked} togglelike={()=>this.togglelike(movie._id)}/></td>
                <td key={movie.dailyRentalRate}>{movie.dailyRentalRate}</td>
            </tr>

            )
        )} 
        <Pagination currentPage={this.state.currentPage} moviesCount={moviesPagination} pageSize={this.state.pageSize} onPageChange={this.handlePageChange}/>
        </tbody>

        return movies;
    }

    togglelike = id => {

        const movies = this.state.movies.map(movie => {if(movie._id == id){movie.liked = !movie.liked}; return movie;});
        this.setState({movies});

    }

    handlePageChange = page => {
    
        this.setState({currentPage: page});

    }

    handleGenreChange = genre => {
        this.setState({currentGenre: genre, currentPage: 1});
    }

 
}

export default Movies; 
