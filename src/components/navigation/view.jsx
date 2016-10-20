import m from 'mithril';

export default function (ctrl) {
	let vm = ctrl.vm;
	// return m("#mySidenav.sidenav", [
	// 		m("a[href='/home']", {config: m.route}, "Home"),
	// 		m("a[href='/about']", {config: m.route}, "About"),
	// 		m("a[href='#']", "Clients"),
	// 		m("a[href='#']", "Contact")
	// 	])
	return <li className="hello">
		<div className="view">
			<input
				className="toggle"
				type="checkbox"
				/>
			<label>label</label>
			<button className="destroy"/>
		</div>
		<input className="edit" />
	</li>
}