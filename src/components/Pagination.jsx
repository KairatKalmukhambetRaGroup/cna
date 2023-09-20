import '@/styles/pagination.scss';

const Pagination = ({page=1, setPage, totalPages=1}) => {
    
    const next = (e) => {
        e.preventDefault();
        setPage(prev => {
            if(Number(prev) < totalPages)
                return Number(prev) + 1;
            return prev;
        })
    }

    const prev = (e) => {
        e.preventDefault();
        setPage(prev => {
            if(Number(prev) > 1)
                return Number(prev) - 1;
            return prev;
        })
    }

    const changePage = (e) => {
        e.preventDefault();
        setPage(e.currentTarget.dataset.page);
    }

    if(totalPages === 1)
        return;

    return (
        <div className="pagination">
            <div className="pagination-item prev" onClick={prev}><i></i></div>

            {page > 1 && (
                <div className="pagination-item" data-page={1} onClick={changePage}>{1}</div>
            )}
            {page > 4 && (
                <div className="pagination-item ellipsis"><i></i></div>
            )}
            

            {page > 3 && (
                <div className="pagination-item" data-page={page - 2} onClick={changePage}>{page - 2}</div>
            )}
            {page > 2 && (
                <div className="pagination-item" data-page={page - 1} onClick={changePage}>{page - 1}</div>
            )}
            <div className="pagination-item current">{page}</div>
            

            {totalPages - page > 1 && (
                <div className="pagination-item" data-page={page + 1} onClick={changePage}>{page + 1}</div>
            )}
            {totalPages - page > 2 && (
                <div className="pagination-item" data-page={page + 2} onClick={changePage}>{page + 2}</div>
            )}

            {totalPages - page > 3 && (
                <div className="pagination-item ellipsis"><i></i></div>
            )}
            {page < totalPages && (
                <div className="pagination-item" data-page={totalPages} onClick={changePage}>{totalPages}</div>
            )}
            <div className="pagination-item next" onClick={next}><i></i></div>    
        </div>
    );
}
export default Pagination;