
const Authentication = async (email, password) => {
    return (
        await fetch(`${import.meta.env.VITE_BACKEND_URL}login`, {method: "POST", headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({email: email, password: password})})
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

export default Authentication;