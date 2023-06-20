import { useParams } from "react-router-dom";

function Detail () {
    const params = useParams();
    return(
        <div>
            <h1>Detail</h1>
            <p>Type: {params.resource}</p>
            <p>Id: {params.id}</p>
        </div>
    )
}

export default Detail;