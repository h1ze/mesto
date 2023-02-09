// export class Section {
//     constructor({items, renderer}, selector) {
//         this._renderedItems = items;
//         this._renderer = renderer;
//         this._selector = document.querySelector(selector);
//     }

//     renderItems() {
//         this._renderedItems.forEach(item => this._renderer(item))
//       }
    
//     addItem(element) {
//         this._selector.prepend(element);
//     }  

// }

export class Section {
    constructor({renderer}, selector) {
        this._renderer = renderer;
        this._selector = document.querySelector(selector);
    }

    renderItems(items) {
        items.forEach(item => this._renderer(item))
      }
    
    addItem(element) {
        this._selector.prepend(element);
    }  

}