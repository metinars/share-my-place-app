class Modal {
    constructor(contentId, fallbackText) {
        this.fallbackText = fallbackText;
        this.contentTemplateEl = document.getElementById(contentId);
        this.modalTemplateEl = document.getElementById('modal-template');
    };

    show() {
        if ('content' in document.createElement('template')) {
            const modalElements = document.importNode(this.modalTemplateEl.content, true);
            const modalElement = document.querySelector('.modal');
            const backdropElement = document.querySelector('.backdrop');
            const contentElement = document.importNode(this.contentTemplateEl.content, true);

            modalElement.appendChild(contentElement);

            document.body.insertAdjacentElement('afterbegin', modalElement);
            document.body.insertAdjacentElement('afterbegin', backdropElement);

        } else {
            //  fallback code
            alert(this.fallbackText);
        }
    };

    hide() { };
};