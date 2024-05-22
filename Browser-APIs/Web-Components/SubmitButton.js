class SubmitButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.shadowRoot.append(SubmitButton.template.content.cloneNode(true));

		this.button = this.shadowRoot.querySelector('button');

		this.button.addEventListener('click', () => {
			if (this.disabled) return;
			else {
				this.dispatchEvent(new Event('submission'), {
					bubbles: true,
					composed: true,
				});
			}
		});
	}

	static get observedAttributes() {
		return ['disabled'];
	}

	get disabled() {
		return this.hasAttribute('disabled');
	}

	set disabled(disabled) {
		if (disabled !== undefined && (disabled === '' || disabled === 'true' || disabled === '1')) {
			this.button.setAttribute('disabled', '');
			this.button.style.backgroundColor = 'gray';
		} else this.button.removeAttribute('disabled');
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'disabled') this.disabled = newValue;
	}
}

SubmitButton.template = document.createElement('template');
SubmitButton.template.innerHTML = `
	<button 
		style="padding:10px 20px; border-radius:5px; border: none; cursor:pointer; background-color: crimson; color:white"
		type="submit"
	>
		<slot></slot>
	</button>
`;

customElements.define('submit-button', SubmitButton);
