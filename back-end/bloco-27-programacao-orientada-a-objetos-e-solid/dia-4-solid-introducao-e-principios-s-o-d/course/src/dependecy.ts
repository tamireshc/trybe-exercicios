/* eslint-disable max-classes-per-file */
export interface Notificator {
    sendNotification(message: string): void;
}

export class ConsoleNotification implements Notificator {
    private name: string
    constructor(_name: string) {
        this.name = _name;
    }

    sendNotification(message: string): void {
        console.log(`Here we go again! - ${message} from ${this.name}`);
    }
}

export class EmailNotification implements Notificator {
    private email: string;

    constructor(email: string) {
        this.email = email;
    }

    sendNotification(message: string): void {
        console.log(
            `Here should go the implementation \
        to send notification to the email: ${this.email} - ${message}`,
        );
    }
}

export class ReadingTracker {
    private readingGoal: number;
    private booksRead: number;
    notificator: Notificator;
    constructor(readingGoal: number, _notificator: Notificator) {
        this.notificator = _notificator;
        this.readingGoal = readingGoal;
        this.booksRead = 0;
    }

    trackReadings(readsCount: number): void {
        this.booksRead += readsCount;
        if (this.booksRead >= this.readingGoal) {
            this.notificator.sendNotification(
                'Congratulations! You\'ve reached your reading goal!',
            );
            return;
        }
        this.notificator.sendNotification('There are still some books to go!');
    }
}

console.log(new ReadingTracker(10, new EmailNotification('tamireshc@gmail.com')).trackReadings(12));