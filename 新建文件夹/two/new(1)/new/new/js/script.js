//点击注册登录
var login = ById("login");
var register = ById("register");
var oMaskDiv = ById("maskDiv");
var logRegDiv = ById("logRegDiv");
//封装事件
var oEvent = {
	addEventHanlder: function(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent('on' + type, handler);
		} else {
			element['on' + type] = handler;
		}
	},
	removeEventHanlder: function(element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent) {
			element.detachEvent('on' + type, handler);
		} else {
			element['on' + type] = null;
		}
	},
	preventDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	stopPropagation: function(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},
	getElement: function(event) {
		return event.target || event.srcElement;
	}
}
//点击注册登录
oEvent.addEventHanlder(login, 'click', (function(obj) {
	showLogin(login);
}))
oEvent.addEventHanlder(register, 'click', (function(obj) {
	showLogin(register);
}))
var flagA = false;
var flagB = false;
window.onresize = function() {
	if (flagA) {
		maskPosition(login);
	}
	if (flagB) {
		maskPosition(register);
	}
}
//弹出登录注册框
function showLogin(obj) {
	if (!flagA) {
		if (obj.id == 'login') {
			var loginMaskDiv = document.createElement("div");
			loginMaskDiv.id = 'loginMaskDiv';
			loginMaskDiv.innerHTML =
				'<div class="userMaskDiv">' +
				'<h3>账号登录</h3>' +
				'<b id = "closeLogin"></b>' +
				'<form>' +
				'<div class ="rowDiv">' +
				'<div class="userSetting">用户名：</div>' +
				'<div>' +
				'<input type="text" placeholder="请输入用户名" />' +
				'</div>' +
				'</div>' +
				'<div class ="rowDiv">' +
				'<div class="userSetting">密 码：</div>' +
				'<div>' +
				'<input type="password" placeholder="请输入密码" />' +
				'</div>' +
				'</div>' +
				'<input type="submit" value="登录" id="checkIn" class="userBtn" />' +
				'</form>' +
				'<div>';
			logRegDiv.appendChild(loginMaskDiv);
			var closeBtn = ById("closeLogin");
			oEvent.addEventHanlder(closeBtn, 'click', function(i) {
				closeMaskDiv(loginMaskDiv);
			})
			flagA = true;
		}
	} else if (!flagB) {
		if (obj.id == 'register') {
			var registerMaskDiv = document.createElement("div");
			registerMaskDiv.id = "registerMaskDiv";
			registerMaskDiv.innerHTML =
				'<div class="userMaskDiv">' +
				'<h3>账号注册</h3>' +
				'<b id = "closeRegister"></b>' +
				'<form>' +
				'<div class ="rowDiv">' +
				'<div class="userSetting">用户名：</div>' +
				'<div>' +
				'<input type="text" placeholder="请输入用户名"/>' +
				'<span></span>' +
				'</div>' +
				'</div>' +
				'<div class ="rowDiv">' +
				'<div class="userSetting">密 码：</div>' +
				'<div>' +
				'<input type="password" placeholder="请输入密码"/>' +
				'<span></span>' +
				'</div>' +
				'</div>' +
				'<div class ="rowDiv">' +
				'<div class="userSetting">确认密码：</div>' +
				'<div>' +
				'<input type="password" placeholder="请再次输入密码"/>' +
				'<span></span>' +
				'</div>' +
				'</div>' +
				'<input type="submit" value="注册" id="registerIn" class="userBtn" />' +
				'</form>'
			logRegDiv.appendChild(registerMaskDiv);
			var closeBtn = ById("closeRegister");
			oEvent.addEventHanlder(closeBtn, 'click', function(i) {
				closeMaskDiv(registerMaskDiv);
			})
			flagB = true;
		}
	}
	var oMaskHeight = document.documentElement.scrollHeight;
	oMaskDiv.style.height = oMaskHeight + 'px';
	oMaskDiv.style.display = "block";
	var selectMaskDiv = ById(obj.id + 'MaskDiv');
	selectMaskDiv.style.display = "block";
	maskPosition(obj);
}

//登录注册框的定位
function maskPosition(obj) {
	var objMaskDiv = ById(obj.id + 'MaskDiv');
	var sWidth = document.documentElement.clientWidth || document.body.clientWidth;
	var sHeight = document.documentElement.clientHeight || document.body.clientHeight;
	var objMaskDivHeight = parseInt(objMaskDiv.offsetHeight);
	var objMaskDivWidth = parseInt(objMaskDiv.offsetWidth);
	objMaskDiv.style.top = parseInt((sHeight - objMaskDivHeight) / 2) + 'px';
	objMaskDiv.style.left = parseInt((sWidth - objMaskDivWidth) / 2) + 'px';
}
//点击关闭按钮
function closeMaskDiv(obj) {
	oMaskDiv.style.display = "none";
	obj.style.display = "none";
}


// 轮播图
function ById(id) {
	return document.getElementById(id);
}

//点击搜索框
var searchText = ById("searchText");
var searchUl = ById("searchUl");
oEvent.addEventHanlder(searchText, 'click', function() {
	searchUl.style.display = "block";
	searchText.className = "formFocus searchText";
})
searchText.onblur = function() {
	searchUl.style.display = "none";
}