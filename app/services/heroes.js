const { Hero } = require('app/models/index');

const buildQueryOptions = (req) => {
    const { name, alias, superPowers } = req.query;
    const options = {};
    if (name) options.name = name;
    if (alias) options.alias = alias;
    if (superPowers) options.superPowers = superPowers;
    return options;
}

const get = (req) => {
    const options = buildQueryOptions(req);
    return Hero.find(options).then(result => result).catch(error => console.log(error));
};

const post = (req) => {
    const {body} = req;
    return Hero.create(body)
    .then(result => result)
};

const destroy = (req) => {
    const { _id } = req.params;
    return Hero.findOneAndDelete(_id)
    .then(result => result);
};

module.exports = {
    destroy,
    get,
    post,
};