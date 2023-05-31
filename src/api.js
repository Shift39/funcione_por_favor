import axios from "axios";



const api = axios.create({
    baseURL: "http://localhost:8080/avaliacoes/1/avaliacao-media",
    headers: {
        'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb3JnZUBlbWFpbC5jb20iLCJpYXQiOjE2ODUzMjQ4NjQsImV4cCI6MTY4ODkyNDg2NH0.Pu9nngKZQEO8xUyDJgUEMS_G6680vLx1pJaE-mUWBLHYBB1wbvY10EiNjjzchFGz84P9akwviYAe-hmG3kqNFQ'
    }
})

export default api;