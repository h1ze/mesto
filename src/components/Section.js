export class Section {
    constructor({renderer}, selector) {
        this._renderer = renderer;
        this._selector = document.querySelector(selector);
    };

    renderItems(items) {
        items.reverse().forEach(item => this._renderer(item))
    };
    
    addItem(element) {
        this._selector.prepend(element);
    }; 

};