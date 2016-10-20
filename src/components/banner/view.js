import m from 'mithril';
import icon from "../../images/menuIcon.svg";

export default function (ctrl) {
	let vm = ctrl.vm;
	return m("div", m("ul", [
				m("li", [m("button.glyphicon.glyphicon-menu-hamburger", {onclick: ctrl.toggleSideNav})]),
				//replace with passed in arguments from the controller
				m("li", [m(".title", "Website!")])
			])
		);
}
