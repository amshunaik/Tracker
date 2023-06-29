//var submit = document.getElementsByClassName('submit');
var date= document.getElementById('date');
var txtNode = document.createTextNode(date);
var day=document.getElementById('day');
var form =document.getElementById('form')
var submit=document.getElementById('submit')
var part2=document.getElementById('part2');
var list=document.getElementById('list');
var ul=document.getElementById('ul');

var br=document.getElementById('br');

function Create(){
    const listItems = ul.getElementsByTagName('li');
	//console.log(ul);
    
	var leng=listItems.length;
	console.log(leng);
	console.log("date", listItems[0]);
	
	var d1,d2;
	var diff=0;
	
    var li=document.createElement("LI");
    var span =document.createElement('span');
	//li.textContent=date.value;
	var todayDate=date.value;
	span.textContent=todayDate;
	var span1=document.createElement('span');
	//span1.textcontext=
	var datediff=0;
    
	console.log("text node data",date.value)
	if(date.value==""){
		alert("Fill the Date of period started !")
		return;
	}
	if(day.value==""){
		alert("Fills the no of day it lasted !")
		return;
	}

	if(listItems.length==0 &&date.value!=""&&day.value!=""){
		span1.textContent="=> After "+ datediff+ " days";
	}
	if(listItems.length>0 &&date.value!=""&&day.value!=""){
		console.log("length: ", listItems.length);
		var prevdate=listItems[leng-1].textContent;
		console.log(prevdate.substring(0,10));
		//const divpart=prevdate.getElementsByTagName('div');
		//console.log("innner: ",divpart.textContent);

        var prev=prevdate.substring(0,10);
		d1=new Date(prev);
	
		d2=new Date(todayDate);
		diff=d2.getTime()-d1.getTime();
		
		datediff=diff/(1000*60*60*24);
		span1.textContent= "=> After "+ datediff+ " days";
	}
	for(var u=0;u<listItems.length;u++){
		console.log(listItems[u]);
		var y=listItems[u];
		y.style.background='white';
	}

	li.appendChild(span);
	li.appendChild(span1)
	console.log(li);
	li.style.background='#e9c0c0';
	date.value="";
	day.value="";
	//li.appendChild(span1);
	//li.
	
	return li;
}

submit.addEventListener('click', (e) => {
	
	e.preventDefault();
	const lil=Create();
	ul.appendChild(lil);
	//ul.appendChild(br);

	//console.log(initial_date);

  });

function contact(){
	alert("This will redirect you to Outlook , where you can send your queries .     Thank you , We welcome your queries !!")
	var link = "mailto:me@example.com"
	window.location.href=link;
}

// const l1 = document.querySelectorAll('.l1');
// const b1 = document.querySelectorAll('.b1');
// const b2=document.querySelectorAll('.b2')
// const but=document.querySelector('.but');

// var pick = null;
// var i,j;
// for ( i = 0; i < l1.length; i++) {
// 	const item = l1[i];
// // event to occur when we select the element which we want to drag
// 	item.addEventListener('dragstart', function () {
// 		pick = item;
//         console.log("DragStart")
//         console.log(item)
        
//         // set time out function to make the element invisible from tthe box once selected
// 		setTimeout(function () {
// 			item.style.display = 'none';
// 		}, 0)
// 	});
// // event occur when we the element taken out of the box and placed in another box.
// 	item.addEventListener('dragend', function () {
//         console.log("Dragend");
//         // set time out function to make the element invisible from tthe box once taken out of box
// 		setTimeout(function () {
// 			pick.style.display = 'block';
// 			pick = null;
// 		}, 0);
// 	})

// 	for ( j = 0; j < b2.length; j ++) {
// 		const list = b2[j];
// // Dragover is active till the element is been dragged, between dragstart to drop.
// 		list.addEventListener('dragover', function (e) {
// 			e.preventDefault();
//             console.log("Dragover")
// 		});
// 		// dragenter event will get activated when the element enter another box leaving its box.
// 		list.addEventListener('dragenter', function (e) {
// 			e.preventDefault();
//             console.log("Dragenter")
// 			this.style.border = 'solid 2px brown';

// 		});

// 		list.addEventListener('dragleave', function (e) {

// 			console .log("Dragleave")
// 		});
// // ondrop function when dropped in the another box.
// 		list.addEventListener('drop', function (e) {
// 			console.log('drop');
// 			this.append(pick);
//             pick.style.border='2px solid black';
// 			this.style.backgroundColor = 'rgb(237 195 195)';
//             pick.style.backgroundColor='#db9fb3'
//             this.style.color='brown'
// 		});
// 	}
// }
// // Click event activated on clicking the button and on clicking it the window get reloaded and the elements get placed in initial position.
// but.addEventListener('click', (e)=>{
//    location.reload();
   
    

// })