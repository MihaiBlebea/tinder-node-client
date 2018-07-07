import React from 'react';
import { withRouter } from 'react-router-dom'

const Pagination = withRouter((props)=> {

    var handlePageChange = (props, i)=> {
        props.history.push(`/girls?page=${i + 1}`)
    }

    var createPageButtons = (props)=> {
        var result = []
        if(props.current == 1)
        {
            for(let i = 0; i < 3; i++)
            {
                result.push(
                    <li className="page-item" key={'page_' + i}>
                        <a className="page-link" onClick={ ()=> handlePageChange(props, i) }>{ i + 1 }</a>
                    </li>
                )
            }
        }
        return result
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link"><i className="fas fa-chevron-left"></i></a>
                </li>
                { createPageButtons(props) }
                <li className="page-item">
                    <a className="page-link"><i className="fas fa-chevron-right"></i></a>
                </li>
            </ul>
        </nav>
    )
})

export default Pagination
