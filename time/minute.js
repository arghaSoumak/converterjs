const minute = {}

/* convert minute to second */
minute.minute_to_second = time => {
	return Number(time) * 60
}

/* convert minute to hour */
minute.minute_to_hour = time => {
	return Number(time) * 0.0166666667
}

module.exports = minute
