class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);   
    }

    addItem(element){
        this._container.prepend(element);
    }

    appendItem(element){
        this._container.append(element);
    }

    renderItems(items) {
        items.forEach(item => {
            this._renderer(item);
        });
    }
}
 
export default Section;