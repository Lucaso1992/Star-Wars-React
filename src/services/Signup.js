
export const Signup = async (email, password) => {
    console.log(import.meta.env.VITE_BACKEND_URL);
    return (
        await fetch(`${import.meta.env.VITE_BACKEND_URL}signup`, {method: "POST", headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({email: email, password: password, is_active: true})})
        .then((res) => {
            if (!res.ok) {
                throw Error();
            }
            return res.json();
        })
        .then(data => data)
        .catch(err => console.log(err)) 
    )
}

