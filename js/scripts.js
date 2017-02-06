function checkOnclickEvent(param) {
  console.log(param);
}

var list = document.getElementById('Lista'),
	add = document.getElementById('addElem');

add.addEventListener('click', function() {
	
	var kolejnyNumer = document.getElementsByTagName('li').length;
	
	list.innerHTML += '<li>item ' +kolejnyNumer + '</li>';
});