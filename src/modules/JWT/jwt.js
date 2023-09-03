import CryptoJS from "crypto-js";
import { decodeToken } from "react-jwt";

// Encryption
const key = process.env.REACT_PUBLIC_KEY_ENCODE;
export const tokenEncode = (data) => {
    try {
        let data_encode;
        data_encode = CryptoJS.AES.encrypt(
            JSON.stringify(data),
            key
        ).toString();
        return data_encode;
    } catch (error) {
        console.log(error);
        return;
    }
};

// Decryption
export const tokenDecode = (data) => {
    try {
        const bytes = CryptoJS.AES.decrypt(data, key);
        let data_encode;
        data_encode = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return data_encode;
    } catch (error) {
        console.log(error);
        return;
    }
};

// decodeAccesstoken
export const decodeAccessToken = (data) => {
    try {
        return decodeToken(data);
    } catch (error) {
        console.log(error);
        return;
    }
};
