import ReadingTracker from './readingTracker';

export default class Notification {
    public track: ReadingTracker;
    constructor(_track: ReadingTracker) {
        this.track = _track;
    }

    progressNotification(): string {
        if (this.track.booksRead >= this.track.readingGoal) {
            return 'Congratulations! You\'ve reached your reading goal!';
        }
        return 'There are still some books to go!';
    }
}