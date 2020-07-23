class Options {
    constructor(height, width, bd, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bd = bd;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    divAdd() {
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        let pram = `height:${this.height}px; width:${this.width}px; background-color:${this.bd}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        elem.style.cssText = pram;
    }

}

const firstDiv = new Options(300, 350, "red", 14, 'center');
firstDiv.divAdd();
