let user = {
    Nameoftheshopis: 'Vui vẻ',
    theowneris: 'Phạm Hữu Thành',
    Listoffood: "'apple', 'melon', 'banana'"
}
var stringUser = JSON.stringify(user);
localStorage.setItem('user', stringUser);
var a = localStorage.getItem(theowneris.user, Listoffood.user)
console.log(a)