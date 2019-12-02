module.exports = (req, res) => {
    res.send([
        {
            id: '12345',
            name: 'The Product',
            price: 12.55
        },
        {
            id: '321',
            name: 'The Product #2',
            price: 99.09
        },
    ])
}