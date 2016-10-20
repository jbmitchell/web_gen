import m from 'mithril';
import banner from '../../components/banner';
import navigation from '../../components/navigation';
import layout from '../../layouts/mainLayout';

export default function (ctrl) {
	let vm = ctrl.vm;
	return m('.home', m("#main", [
		m(navigation),
		m(banner),
		m("h2", "About Page"),
		m("p", "This page will describe the website.")
	]));
}
