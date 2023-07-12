const get404 = (req, res) => {
    try {
        res.render('404', { title: '404 Page', is404: true})
    } catch (error) {
        console.log(error)
    }
}

module.exports = get404