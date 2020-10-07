import { httpFetch } from './http';
import constant from '../helpers/constants';

export const getAuth = (code) => {
    fetch(constant.API.getAuth, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "grant_type": "authorization_code",
            "client_id": `${constant.client_id}`,
            "client_secret": `${constant.client_secret}`,
            "code": `${code}`,
            "redirect_uri": `${constant.Callback_URL}`
        })
    })
        .then(response => {
            return response.text();
        })
        .then(response => {
            let data = JSON.parse(response)
            if (data.access_token) {
                localStorage.setItem('auth_token', data.access_token)
                localStorage.setItem('scope', data.scope)
                console.log(response, 'response', data.access_token)
                getUserData();
            }
            return response;
        })
        .catch(err => console.error(err));
}


export const getUserData = () => {
    const api_token = localStorage.getItem('auth_token');

    fetch(`https://api.atlassian.com/me`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${api_token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.text();
        })
        .then(response => {
            localStorage.setItem('user_details', JSON.stringify(response))
            return response;
        })
        .catch(err => console.error(err));
}

export const getAccessableResource = () => {
    const api_token = localStorage.getItem('auth_token');

    fetch(`https://api.atlassian.com/oauth/token/accessible-resources`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${api_token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.text();
        })
        .then(response => {
            localStorage.setItem('user_details', JSON.stringify(response))
            return response;
        })
        .catch(err => console.error(err));
}

export const getAllProject = (key) =>{
    const api_token = localStorage.getItem('auth_token')
    const user = JSON.parse(localStorage.getItem('user_details'))

    fetch(`${constant.BaseURL}rest/api/2/${key}`, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${Buffer.from(
            `${user.email}:${api_token}`).toString('base64')}`,
          'Accept': 'application/json'
        }
    })
        .then(response => {
            return response.text();
        })
        .then(response => {
            localStorage.setItem('user_details', JSON.stringify(response))
            return response;
        })
        .catch(err => console.error(err));
}