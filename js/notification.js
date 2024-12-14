// Handle notification functionality
export class Notification {
    constructor() {
        this.element = document.getElementById('notification');
    }

    show(message = 'Copied to clipboard!') {
        this.element.querySelector('span').textContent = message;
        this.element.classList.add('show');
        setTimeout(() => {
            this.element.classList.remove('show');
        }, 2000);
    }
}