import { useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
function DetailsPage() {
    let { id } = useParams()
    console.log('id:', id)
    const history = useHistory();

    const dispatch = useDispatch();
    const store = useSelector(store => store.specific)

    console.log('the store:', store)

    const getMovie = () => {
        dispatch({
            type: 'SPECIFIC_MOVIE',
            payload: id
        })
    }

    useEffect(() => {
        getMovie()
    }, [])

    const handleClick = () => {
        console.log('CLICKED');
        history.push('/')
    }


    return (
        <>
            <h1>Detail Page</h1>
            <div>
                {store.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <h3>{store.specific[0].title}</h3>
                        <h3>{store.specific[0].description}</h3>
                        <img src={store.specific[0].poster} alt={store.specific.title} />
                        <h3>Genres:</h3>
                        <div>
                            {store.genres.map(genre => {
                                return ( 
                                    <h3>{genre.name}</h3>
                                )
                            })}
                        </div>
                    </>

                )}
            </div>
            <div>
                <button onClick={handleClick}>HOME</button>
            </div>
        </>
    )
}

export default DetailsPage