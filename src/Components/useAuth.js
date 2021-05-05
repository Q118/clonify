import { useState, useEffect } from 'react';
import axios from 'axios';


function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()


    useEffect(() => {
        axios.post('http://localhost:3001/login', {
            code,
        }).then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({}, null, "/")
        }).catch(() => {
            window.location = '/'
        })
    }, [code]);

    //neeced to call al of the diff spotify APIs
    return accessToken


}





export default useAuth;