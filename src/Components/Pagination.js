import React, {Component} from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

class Pagination extends Component {


    

    render (){

        const {pageSize, moviesCount, currentPage } = this.props;

        console.log(currentPage);

        let pagesCount = Math.ceil(moviesCount/pageSize);

        if (pagesCount ===0) return null;

        let pages = _.range(1,pagesCount+1,1);

        
        return (

            <div className="justify-content-md-center">
            <nav aria-label="Page navigation example">
            <ul className="pagination">
            {pages.map(page => {
                
                return (<li className={page===currentPage ? 'page-item active' : 'page-item'} key={page}><a className='page-link' onClick={()=>this.props.onPageChange(page)}>{page}</a></li>);

            })}
            </ul>
            </nav>
            </div>

        );

    }
        

}

Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired, moviesCount: PropTypes.number.isRequired, currentPage: PropTypes.number.isRequired 
}

export default Pagination;