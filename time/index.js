const hour = require('./hour')
const minute = require('./minute')
const second = require('./second')

module.exports = {
	...hour,
	...minute,
	...second
}
