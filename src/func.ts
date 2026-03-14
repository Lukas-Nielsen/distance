export const getSmall = (data: string[]) => data.sort((a, b) => a.localeCompare(b))[0];

export const strToTime = (data: string) => {
	const t = data.split(/[:,]/).map((entry) => {
		return parseInt(entry);
	});

	return t[0] * 60 + t[1] + t[2] / 100;
};
