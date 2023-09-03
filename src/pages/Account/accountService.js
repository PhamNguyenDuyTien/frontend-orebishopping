import apiService from "../../modules/service/apiService";

// export const accountService = {
//     // Sign in with email and password
//     async signInAccount(email, password) {
//         try {
//             const res = await apiService.post("/user/sign-in", {
//                 email,
//                 password,
//             });
//             return res.data;
//         } catch (error) {
//             return error;
//         }
//     },
//     // Sign up
//     async signUpAccount(name, email, password, phone, address) {
//         try {
//             const res = await apiService.post("/user/sign-up", {
//                 name,
//                 email,
//                 password,
//                 phone,
//                 address,
//             });
//             return res.data;
//         } catch (error) {
//             return error;
//         }
//     },

//     // Log out
//     async logoutAccount(token) {
//         console.log({token})
//         try {
//             const res = await apiService.post("/user/log-out", {}, {
//                 headers: {
//                     token: `Bearer ${token}`,
//                 },
//             });
//             return res.data;
//         } catch (error) {
//             return error;
//         }
//     },

//     // Detail of user
//     async detailUserLogin(id, token) {
//         try {
//             const res = await apiService.get(`/user/get-detail-user/${id}`, {
//                 headers: {
//                     token: `Bearer ${token}`,
//                 },
//             });
//             return res.data;
//         } catch (error) {
//             return error;
//         }
//     },

//     // Create new access token
//     async createAccessToken(token) {
//         try {
//             const res = await apiService.post(
//                 "/user/refresh-token", {},
//                 {
//                     headers: {
//                         token: `Bearer ${token}`,
//                     },
//                 }
//             );
//             return res.data;
//         } catch (error) {
//             return error;
//         }
//     },
// };
