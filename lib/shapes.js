class Shapes {
    constructor(shape, shapeColor, logoText, logoTextColor) {
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.logoText = logoText;
        this.logoTextColor = logoTextColor;

        if (logoText.length > 3) {
            throw new Error('Logo text must be between 1 and 3 characters.')
        }
    }
}