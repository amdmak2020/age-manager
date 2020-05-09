function pure () {
    var amdmak = prompt("whene the hell did you slapped on your ass for the first time")
    var d = new Date ;
    var year = d.getFullYear()
    var days = (year - amdmak) * 360;
    var h = document.createElement('h1');
    var s = document.createElement('div');
    var t = document.createTextNode('you have lived '+ days + ' days on the earth and still your ideas in your head?!?!?!?!')
    h.setAttribute('id', 'mamama');
    s.setAttribute('id', 'cri');
    s.appendChild(h)
    h.appendChild(t)
    document.getElementById('memo').appendChild(s)
    document.getElementById('cri').appendChild(h)
}
function remo() {
    document.getElementById('cri').remove();
}