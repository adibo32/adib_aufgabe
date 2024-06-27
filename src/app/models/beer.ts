let nextId = 1;

export class Beer {
  id: number;
  constructor(
    public name: string,
    public origin: string,
    public value: number,
    public picture:string) {
      this.id = nextId++;
    }
}
