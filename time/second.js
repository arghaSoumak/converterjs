const second = {}

/* convert second to minute */
second.second_to_minute = time => {
	return Number(time) * 0.0166666667
}

/* convert second to hour */
second.second_to_hour = time => {
	return Number(time) * 0.0002777778
}

module.exports = second
