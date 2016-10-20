import m from 'mithril';

export default function (ctrl) {
	let vm = ctrl.vm;
	return m("#mySidenav.sidenav", [
			m("a[href='/home']", {config: m.route}, "Home"),
			m("a[href='/about']", {config: m.route}, "About"),
			m("a[href='#']", "Clients"),
			m("a[href='#']", "Contact")
		])
}