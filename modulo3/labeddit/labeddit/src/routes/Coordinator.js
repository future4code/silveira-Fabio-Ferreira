export const goToLogin = (navigate) => {
    navigate('/')
}

export const goToCadastro = (navigate) => {
    navigate('/cadastro')
}

export const goTofeed = (navigate) => {
    navigate('/feed')
}

export const goToDetalhes = (navigate, id) => {
    navigate(`/detalhes/${id}`)
}