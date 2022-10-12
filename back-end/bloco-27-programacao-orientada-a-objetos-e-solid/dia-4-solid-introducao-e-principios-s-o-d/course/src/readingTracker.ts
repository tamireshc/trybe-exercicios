// ReadingTracker.ts

import Notification from '../src/notifications';
import WhishListTracker from "../src/whishListTracker";

export default class ReadingTracker {
    public readingGoal: number;
    public booksRead: number;
    constructor(readingGoal: number) {
        this.readingGoal = readingGoal;
        this.booksRead = 0;
    }

    trackReadings(readsCount: number): void {
        this.booksRead += readsCount;
    }
}

const readTracker = new ReadingTracker(20);
const wishlist = new WhishListTracker();
wishlist.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
wishlist.showWishlist();
readTracker.trackReadings(12);
const notifications = new Notification(readTracker);
console.log(notifications.progressNotification());
readTracker.trackReadings(9);
console.log(notifications.progressNotification());
