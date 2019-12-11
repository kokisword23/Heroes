export function getToken() {
    return localStorage.getItem('token');
}

export function saveToken(token) {
    localStorage.setItem('token', token);
}

export function hasUserHero() {
    if(!!getToken()) {
        return JSON.parse(atob(getToken().split('.')[1])).hasHero;
    }
    return false;
}
