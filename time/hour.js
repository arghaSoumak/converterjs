const hour = {}

/* convert hour to minute */
hour.hour_to_minute = time => {
	return Number(time) * 60
}

/* convert hour to second */
hour.hour_to_second = time => {
	return Number(time) * 3600
}

module.exports = hour
