// Handle click tracking functionality
export class ClickTracker {
    constructor() {
        this.storageKey = 'templateClicks';
        this.clicks = this.loadClicks();
    }

    loadClicks() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : {};
    }

    saveClicks() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.clicks));
    }

    trackClick(templateId) {
        this.clicks[templateId] = (this.clicks[templateId] || 0) + 1;
        this.saveClicks();
    }

    getClicks(templateId) {
        return this.clicks[templateId] || 0;
    }

    getAllClicks() {
        return this.clicks;
    }
}