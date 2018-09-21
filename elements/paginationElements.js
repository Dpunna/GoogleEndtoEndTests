const paginationElements = Object.create({
    'verifypaginationBar': '#nav',
   'clickPaginationElement': `document.querySelector("[aria-label='Page 2']").click()`,
    'paginationHasNextElement': `document.querySelector('#pnnext')`
});

module.exports = paginationElements;