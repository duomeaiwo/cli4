const TokenKey = 'Admin-Token'

export function setToken(val) {
    return localStorage.setItem(TokenKey, val)
}

export function getToken() {
    return localStorage.getItem(TokenKey)
}

export function removeToken() {
    return localStorage.removeItem(TokenKey)
}
