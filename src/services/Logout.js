const Logout = () => {
    return(
        sessionStorage.removeItem("token")
    )
}

export default Logout;