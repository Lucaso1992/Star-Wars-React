export const validateToken = async () => {
    const token = sessionStorage.getItem("token");
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}protected`, {
            headers: {"Authorization": "Bearer " + token}
        });

        if (response.status !== 200) {
            console.log("Error de validacion");
        } else {
            const data = await response.json();
            if (data && data.token) {
                sessionStorage.setItem("token", data.token);
            } else {
                alert("Token no válido");
            }
        }
    } catch (err) {
        console.log(err);
        alert("Error en la solicitud");
    }
};