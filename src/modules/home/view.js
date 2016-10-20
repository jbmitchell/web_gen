
import m from 'mithril';
import banner from '../../components/banner';
import navigation from '../../components/navigation';
import waterfall from '../../images/waterfall.jpg';
import waterfall2 from '../../images/waterfall2.jpg';
import loop from '../../images/loop.jpg';
import newbie from '../../images/newbie.jpg';

export default function (ctrl) {
	let vm = ctrl.vm;
	return m('.home', m("#main", [
		m(navigation),
		m(banner),
		m("h2", "Home Page"),
		m("p", "This page will introduce the website."),
		m(".carousel.slide[data-ride='carousel'][id='myCarousel']",
			[
				m("ol.carousel-indicators",
					[
						m("li.active[data-slide-to='0'][data-target='#myCarousel']"),
						m("li[data-slide-to='1'][data-target='#myCarousel']"),
						m("li[data-slide-to='2'][data-target='#myCarousel']"),
						m("li[data-slide-to='3'][data-target='#myCarousel']")
					]
				),
				m(".carousel-inner[role='listbox']",
					[
						m(".item.active", m("img[alt='waterfall']", { src: waterfall })),
						m(".item", m("img[alt='waterfall2']", { src: waterfall2 })),
						m(".item", m("img[alt='loop']", { src: loop })),
						m(".item", m("img[alt='newbie']", { src: newbie })),
					]
				),
				m("a.left.carousel-control[data-slide='prev'][href='#myCarousel'][role='button']",
					[
						m("span.glyphicon.glyphicon-chevron-left[aria-hidden='true']"),
						m("span.sr-only", "Previous")
					]
				),
				m("a.right.carousel-control[data-slide='next'][href='#myCarousel'][role='button']",
					[
						m("span.glyphicon.glyphicon-chevron-right[aria-hidden='true']"),
						m("span.sr-only", "Next")
					]
				)
			]
		)
	]));
}