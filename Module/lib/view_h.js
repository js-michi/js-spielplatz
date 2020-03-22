let view_h =(function(){
	"use strict";
	let toogleMenu=()=>{
		let childDivs = document.getElementById('menu');
		if(childDivs===null) return;
		if(childDivs.style.visibility==='hidden'||childDivs.style.visibility==='') childDivs.style.visibility='visible';
		else childDivs.style.visibility='hidden';
	}

	let clear_r=()=>{
		let cDiv = document.getElementById("right");
		if(cDiv===null) return;
		while(cDiv.firstChild)cDiv.removeChild(cDiv.firstChild);
	}

	let clear_l=()=>{
		let leftDiv = document.getElementById("left");
		if(leftDiv===null) return;
		while(leftDiv.firstChild){
			leftDiv.removeEventListener('click', viewer.click);
			leftDiv.removeChild(leftDiv.firstChild);
		}
		cont.setAktMenu(null);
	}

	let setEditTitle=(txN='',txS='',txD='')=>{
		let eleN = document.getElementById("btnNew");
		let eleS = document.getElementById("btnSave");
		let eleD = document.getElementById("btnDel");
		if(eleN!=null) eleN.title = txN;
		if(eleS!=null) eleS.title = txS;
		if(eleD!=null) eleD.title = txD;
	}

	let setLblStatus=(txt)=>{
		//let lblSt = document.getElementById("lbl_foot");
		//if(lblSt!=null) lblSt.innerText=ini.CONFOBJ.titel+" ["+txt+"]"
	}

	let setWait=(a)=>{
		document.getElementById("wait").style.display=(a==true?'block':'none');
	}

	let setLeftHead=(txt)=>{
		let lblSt = document.getElementById("stl");
		if(lblSt!=null) lblSt.innerText=txt;
	}

	let setRightHead=(txt)=>{
		let lblSt = document.getElementById("str");
		if(lblSt!=null) lblSt.innerText=txt;
	}

	let createLi=(value,l)=>{
		let child = document.createElement("li");
		child.className='list';
		child.innerText=value.Name;
		//var b = JSON.stringify(value);
		child.setAttribute("nr", value.Id);
		child.setAttribute("l", l);
		return child;
	}

	let createEle=(type,id='',clN='',val='',lstAtr=[],title='')=>{
		let child = document.createElement(type);
		if(clN != '') child.className=clN;
		if(id != '') child.id=id;
		if(val != '') child.innerText=val;
		if(title != '') child.title=title;
		for (var a in lstAtr){
			let at = lstAtr[a];
			child.setAttribute(at.name, at.val);
		}
		return child;
	}

	let createImg=(id,src,clN,t)=>{
		let img=document.createElement("img");
		img.id=id;
		img.src=src;
		img.className=clN;
		img.title=t;
		img.alt=t;
		return img;
	}

	return{
		createImg,
		createEle,
		createLi,
		setRightHead,
		setLeftHead,
		setLblStatus,
		setEditTitle,
		clear_l,
		clear_r,
		toogleMenu,
		setWait
	}
})();
