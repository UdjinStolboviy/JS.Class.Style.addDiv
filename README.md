# JS.Class.Style.addDiv
Как сделать  класс и добавить елемен на  страницу с стилями

--------------------------------------------------------------------------
- Создать класс options
- Он должен содержать свойства: height, width, bg, fontSize, textAlign
- Он должен содержать метод, создающий новый div на странице, записывающий в него любой текст и при помощи cssText изменять свой стиль из переданных параметров
- Создать новый объект через класс
- Вызвать его метод и получить элемент на странице
---------------------------------------------------------------------------------------------------------

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
