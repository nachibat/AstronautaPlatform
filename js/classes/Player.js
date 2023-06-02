class Player {

    constructor(canvas, context) {
        this.width = 30;
        this.height = 30;
        this.position = { x: 100, y: 100 };
        this.velocity = { x: 0, y: 0 };
        this.gravity = 1.5;
    }

    draw() {
        context.fillStyle = 'red'
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y;
        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += this.gravity;
        } else {
            this.velocity.y = 0;
        }
    }

}