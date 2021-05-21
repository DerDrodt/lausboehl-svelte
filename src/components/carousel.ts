import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import Flickity from 'flickity';

const waitForImgLoad = (img: HTMLImageElement): Promise<void> => {
	return new Promise((resolve) => {
		if (img.complete) return resolve(void 0);
		img.addEventListener('load', () => {
			resolve(void 0);
		});
	});
};

@customElement('lb-carousel')
class LbCarousel extends LitElement {
	static get styles() {
		return css`
			:host {
				display: block;
				padding: 0 0 16px 0;
			}

			img {
				width: 100%;
			}
		`;
	}

	@query('#slider')
	wrapper: HTMLDivElement;

	private slider: Flickity | undefined;

	async firstUpdated() {
		const children = [...(this.shadowRoot.host.children as any)];

		await Promise.all(children.map(waitForImgLoad));

		this.slider = new Flickity(this.wrapper, { wrapAround: true, autoPlay: true });
		this.slider.append(children);
		this.slider.select(1, false, true);

		this.slider.remove((this.slider.cells[0] as any).element);
	}

	render() {
		return html`<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
			<div id="slider">
				<slot></slot>
			</div> `;
	}
}

export default LbCarousel;
