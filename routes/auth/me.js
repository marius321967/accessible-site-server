/**
 * Reports the details of the current token owner.
 */
module.exports = (req, res) => res.send(req.user)