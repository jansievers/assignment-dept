import axios from 'axios';
import * as R from 'ramda';

const apiUrl = 'https://randomuser.me/api/?results=25';

export const getPersons = () => {
    return axios.get(apiUrl);
};

export const normalize = (res) => {
    // Extract from payload
    return R.pathOr(['N/A'], ['data', 'results'], res);
};