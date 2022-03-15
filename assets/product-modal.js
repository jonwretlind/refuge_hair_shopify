
class ProductModal extends ModalDialog {
  constructor() {
    super();
  }

  hide() {
    super.hide();
  }

  show(opener) {
    super.show(opener);
    this.showActiveMedia();
  }

  showActiveMedia() {
    this.querySelectorAll(`[data-media-id]:not([data-media-id="${this.openedBy.getAttribute("data-media-id")}"])`).forEach((element) => {
        element.classList.remove('active');
      }
    )
    const activeMedia = this.querySelector(`[data-media-id="${this.openedBy.getAttribute("data-media-id")}"]`);
    const activeMediaTemplate = activeMedia.querySelector('template');
    const activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;
    activeMedia.classList.add('active');
    activeMedia.scrollIntoView();

    const container = this.querySelector('[role="document"]');
    container.scrollLeft = (activeMedia.width - container.clientWidth) / 2;

    if (activeMedia.nodeName == 'DEFERRED-MEDIA' && activeMediaContent && activeMediaContent.querySelector('.js-youtube'))
      activeMedia.loadContent();
  }
}

customElements.define('product-modal', ProductModal);

  document.addEventListener('DOMContentLoaded', function() {
    function isIE() {
      const ua = window.navigator.userAgent;
      const msie = ua.indexOf('MSIE ');
      const trident = ua.indexOf('Trident/');

      return (msie > 0 || trident > 0);
    }

    if (!isIE()) return;
    const hiddenInput = document.querySelector('#{{ product_form_id }} input[name="id"]');
    const noScriptInputWrapper = document.createElement('div');
    const variantSwitcher = document.querySelector('variant-radios[data-section="{{ section.id }}"]') || document.querySelector('variant-selects[data-section="{{ section.id }}"]');
    noScriptInputWrapper.innerHTML = document.querySelector('.product-form__noscript-wrapper-{{ section.id }}').textContent;
    variantSwitcher.outerHTML = noScriptInputWrapper.outerHTML;

    document.querySelector('#Variants-{{ section.id }}').addEventListener('change', function(event) {
      hiddenInput.value = event.currentTarget.value;
    });
  });
  
