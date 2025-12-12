interface FilterStrategy {
  removeValue(value: number): boolean;
}

class RemoveNegativeStrategy implements FilterStrategy {
  removeValue(value: number): boolean {
    return value < 0;
  }
}

class RemoveOddStrategy implements FilterStrategy {
  removeValue(value: number): boolean {
    return Boolean(Math.abs(value) % 2);
  }
}

class Values {
  constructor(public values: number[]) { }
  
  filter(strategy: FilterStrategy): number[] {
    const result: number[] = [];
    for (const value of this.values) {
      if (!strategy.removeValue(value)) {
        result.push(value);
      }
    }

    return result;
  }
}

const values = new Values([1, 2, 3, 4, 5, -6, -7, -8, 9, 10]);

console.log(values.filter(new RemoveNegativeStrategy()))
console.log(values.filter(new RemoveOddStrategy()))