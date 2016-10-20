import m from 'mithril';

export default function() {
	let vm = ctrl.vm;
	return () => {
            return m("div", [
                //sliding nav bar
                m(nav),
                //id=main so banner and body get slid
                m("div#main", [m(banner), m(body)])
            ]);//div
	}
}