var jwt = require('jsonwebtoken');
const axios = require('axios');

export function cli(args) {
    var token = jwt.sign({ foo: 'bar' }, 'secret', { algorithm: 'HS256' });
    console.log(token);
    axios.get('http://localhost:3000/objects', {headers: {Authorization: "Bearer " + token}}).then(res => {
        this.profile = res.data;
        console.log('profile is:', res.data);
       })
       .catch(error => console.log(error)) 
}