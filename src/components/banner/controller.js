import VM from './viewModel';

export default class Controller {
	constructor(args) {
		var ctrl = this;
		ctrl.vm = new VM(args);
		//todo get arguments for title

		ctrl.toggleSideNav = function () {
			// console.log("toggleSideNav");
			if (document.getElementById("mySidenav").style.width == "0px" ||
				document.getElementById("mySidenav").style.width == 0) {
				document.getElementById("mySidenav").style.width = "150px";
				document.getElementById("main").style.marginLeft = "150px";
			} else {
				document.getElementById("mySidenav").style.width = "0px";
				document.getElementById("main").style.marginLeft = "0px";
			}
		}
		return this;
	}
}