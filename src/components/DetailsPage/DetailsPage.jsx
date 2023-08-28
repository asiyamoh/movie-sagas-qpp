import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
function DetailsPage() {
    let { id } = useParams()
    console.log('id:', id)

    const dispatch = useDispatch();


    useEffect(() =>  {
        dispatch({
            type:'SPECIFIC_MOVIE',
            payload:id
        })
    })


    return (
        <>
            <h1>Detail Page</h1>
        </>
    )
}

export default DetailsPage