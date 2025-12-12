interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}

interface Aggregator<T> {
  createIterator(): Iterator<T>;
}

class ListNode<T> {
  public value: T;
  public next: ListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class LinkedListIterator<T> implements Iterator<T> {
  private current: ListNode<T> | null;

  constructor(head: ListNode<T> | null) {
    this.current = head;
  }

  public next(): T | null {
    if (this.current) {
      const value = this.current.value;
      this.current = this.current.next;
      return value;
    }
    return null;
  }

  public hasNext(): boolean {
    return this.current !== null;
  }
}

class LinkedList<T> implements Aggregator<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;

  public add(value: T): void {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  public createIterator(): Iterator<T> {
    return new LinkedListIterator<T>(this.head);
  }
}

const myList = new LinkedList<number>();
myList.add(1);
myList.add(2);
myList.add(3);

const iterator = myList.createIterator();

console.log("Iterating over Linked List:");
while (iterator.hasNext()) {
  console.log(iterator.next());
}