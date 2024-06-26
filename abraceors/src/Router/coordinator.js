export const goToHome = (navigate) => {
    navigate("/")
}

export const goToAbout = (navigate) => {
    navigate("/sobre")
}

export const goToForm = (navigate, form) => {
    navigate(`/${form}`)
}