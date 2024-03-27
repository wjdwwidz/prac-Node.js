function submitSearchQuery(){
	var searchQuery= document.getElementById('search').value;
	location.href = `/?search=${searchQuery}`;
}

module.exports = {submitSearchQuery}
