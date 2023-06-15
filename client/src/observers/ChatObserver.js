class ChatObserver {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter(
      (existingSubscriber) => existingSubscriber !== subscriber
    );
  }

  update(onlineFriends) {
    this.subscribers.forEach((subscriber) => {
      subscriber.handleUpdate(onlineFriends);
    });
  }
}

export { ChatObserver };
