class Publisher {
  subscribers: Subscriber[];
  constructor(public name: string) {
    this.name = name;
    this.subscribers = []
  }

  subscribe(subscriber: Subscriber): void {
    this.subscribers.push(subscriber);
  }

  notify(event: string) {
    this.subscribers.forEach(subscriber => {
      subscriber.handleEvent(event);
    })
  }
}

interface Subscriber {
  handleEvent(event: string): void;
}

class IoTSubscriber implements Subscriber{
  constructor(public name: string) {}
  
  handleEvent(event: string): void {
    console.log(`${this.name} received: ${event}`);
  }
}

const eventsPublisher = new Publisher("Events publisher");
const esp32 = new IoTSubscriber("ESP32");
const arduino = new IoTSubscriber("Arduino Uno");

eventsPublisher.subscribe(esp32);
eventsPublisher.subscribe(arduino);

eventsPublisher.notify("The device is overheated");