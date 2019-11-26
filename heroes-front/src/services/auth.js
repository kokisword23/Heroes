// let auth = {};

// class AuthService {
//     saveCredentials(credentials) {
//         auth['token'] = credentials;
//         auth['role'] = JSON.parse(
//             atob(credentials.split('.')[1])
//         )['role'];
//     }
    
//     getCredentials() {
//         if(auth['token']) return 'Bearer ' + auth['token'];
//     }
    
//     getRole() {
//         if(auth['role']) return auth['role'];
//     }
    
//     evictCredentials() {
//         auth = {};
//     }
// }

// export default new AuthService();