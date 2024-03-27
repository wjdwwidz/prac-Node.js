module.exports = {
	//기본값으로 빈 배열을 주어 null 이 아닌 0을 반환하도록 함
	lengthOfList: (list = []) => list.length,
	eq:(val1,val2) => val1 === val2,
	dateString: (isoString) => new Date(isoString).toLocaleString(),
};