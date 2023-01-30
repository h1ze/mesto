export class Section {
    constructor({items, renderer}, selector) {
        this._renderedItems = items;
        this.renderer = renderer;
        this._selector = document.querySelector(selector);
    }

    renderItems() {
        this._renderedItems.forEach(item => this._renderer(item))
      }
    
    addItem(element) {
        this._selector.append(element);
    }  

}