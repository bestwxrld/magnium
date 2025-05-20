import axios from "axios"
const API_URL = process.env.API_URL || "http://mag.signal.moxitech.ru";
// X-MOXITECH-MAGNIUM-STACK-ID -> project secret in header for comminicate with moxitech stack
const XMMSID = process.env.XMMSID || "1022";
// api -> object for cross-server communication
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-MOXITECH-MAGNIUM-STACK-ID': XMMSID,
    }
})
export default api;