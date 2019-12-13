export function getToken() {
    return localStorage.getItem('token');
}

export function saveToken(token) {
    localStorage.setItem('token', token);
}

export function hasUserHero() {
    if(localStorage.getItem('token') != null) {
        return JSON.parse(atob(getToken().split('.')[1])).hasHero;
    }
}

export function getHeroNameFromToken() {
    return JSON.parse(atob(getToken().split('.')[1])).heroName;
}
