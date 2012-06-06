var $id = function(o) {
	return document.getElementById(o) || o;
}
var list = [], temp = [];
function creat_n() {
	var len = $id('len').value || 10, max = $id('max').value || 99, v1 = $id('v1').value, v2 = $id('v2').value, v3 = $id('v3').value, arr = [];
	arr.push(v1, v2, v3);
	for (var i = 0; i < len / 2 - 3; i++) {
		var ran = Math.round(Math.random() * 100);
		if (ran > max || con(ran, arr)) {
			i--;
			continue;
		}
		while (ran.toString().length < 2) {
			ran = '0' + ran;
		}
		arr.push(ran);
	}
	arr.sort();
	$id('val').value = arr.join('');

	if (con(arr.join(''), list)) {
		creat_n();
		return false;
	}
	if (arr.join('').slice(0, 6) == temp.slice(-1).join('').slice(0, 6)) {
		creat_n();
		return false;
	}

	list.push(arr);
	temp.push(arr.join(''))
	$id('list').value = temp.join('\n');
	anay(list);
}
function con(ran, arr) {
	if (ran === arr)
		return true;
	else
		for (var j = 0; j < arr.length; j++) {
			if (ran == arr[j])
				return true;
		}
	return false;
}
function anay(arr) {
	var cache = {}, dist = [], count = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[0].length; j++) {
			var k = arr[i][j];
			count++;
			if (cache[k]) {
				cache[k]++;
			} else {
				cache[k] = 1;
			}
		}
	}
	for (var m in cache) {
		dist.push(m + ': ' + (cache[m] * 100) / count + '%');
	}
	$id('anay').value = dist.join('\n');
}
