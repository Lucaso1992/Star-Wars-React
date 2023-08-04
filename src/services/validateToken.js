
const validateToken = async (email, password) => {
    const token = sessionStorage.getItem("token")
    return (
        await fetch(`${process.env.BACKEND_URL}/validatetoken`, {method: "POST", headers: {"Authorization": "Bearer" + token}})
        
        .then((res) => {
            if (!res.ok) {
                throw Error();
            }
            return res.json();
        })
        .then(data => sessionStorage.setItem("token" = data.token)
        .catch(err => console.log(err))
        )
    )
}