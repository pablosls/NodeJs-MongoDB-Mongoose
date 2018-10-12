const httpCodes = require('http-status-codes');
const service = require("app/services/heroes");


const get = (req, res) => {
   service.get(req).then((result) => {
       if(!result || !result.length) {
           return res.status(httpCodes.NO_CONTENT).send(result);
       }
       return res.send(result);
   })
};

const post = (req, res) => {
    service.post(req).then((result) => {
        return res.status(httpCodes.CREATED).send(result);
    })
    .catch(error => res.send(error));
};

const destroy = (req, res) => {
    service.destroy(req)
    .then((result) => {
        return res.send(result);
    })
    .catch(error => console.log(error));
}

module.exports = {
    destroy,
    get, 
    post,
}