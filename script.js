/* =================================================== */
/*	   			JavaScript DOM activeElement           */
/* =================================================== */

// activeElement
document.body.addEventListener('click',function(){
	console.log(document.activeElement.tagName);
});

// addEventListener('eventName',function(event){...})
document.getElementById('demo').addEventListener('mouseenter',function(){
	this.style.background = 'red';
});
document.getElementById('demo').addEventListener('mouseleave',function(){
	this.style.background = '#aaa';
});

// baseURI
console.log(document.baseURI);

// body
document.body.style.background = '#f4f4f4';
let p = document.createElement('p');
let text = document.createTextNode('This is paragraph.');
p.appendChild(text);
document.body.appendChild(p);

// open(), close();
document.open();
document.write('<h1>This is heading.</h1>');
document.close();

// setAttribute()
let attr = document.createAttribute('class');
attr.value = 'democlass';
document.getElementsByTagName('p')[0].setAttributeNode(attr);

// createComment()
var c = document.createComment('My Personal Comment');
document.body.appendChild(c);

// Create Element
let h1 = document.createElement('h1');
h1.innerHTML = 'This is Heading One Created Dynamically.';
document.body.appendChild(h1);

let button = document.createElement('button');
button.innerHTML = 'Click Here';
document.body.appendChild(button);

// Create Text Node
p = document.createElement('p');
p.className = 'democlass';
text = document.createTextNode('This is dynamically created paragraph.');
p.appendChild(text);
document.body.appendChild(p);

// designMode
document.designMode = "on";

document.getElementById('offDesignMode').addEventListener('click',function(){
	document.designMode = "off";	
});