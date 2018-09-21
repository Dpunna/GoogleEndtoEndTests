var searchPage = require('../methods/searchInput');

const homepage = async (page) => {
     await searchPage.searchInput(page);
};


module.exports = {
    homepage
};