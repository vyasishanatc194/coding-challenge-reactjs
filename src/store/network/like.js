import axios from '../../axiosUrl';

export const getLikes = (param) => {
    return dispatch => {
        return axios.get(`api/v1/like/`, param, {headers: {'Content-Type': 'application/json'}});
    }
}

export const saveLike = () => {
    return dispatch => {
        return axios.post(`api/v1/like/`, {}, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}