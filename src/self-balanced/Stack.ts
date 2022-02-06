class Stack<T> {
  private _container: T[] = [];

  get container(): T[] {
    return this._container;
  }

  isEmpty(): boolean {
    return this._container.length === 0;
  }

  push(item: T): number {
    return this._container.push(item);
  }

  pop(): T | undefined {
    return this._container.pop();
  }

  outputAsString(): string {
    return this._container.join(', ');
  }
}

export default Stack;
