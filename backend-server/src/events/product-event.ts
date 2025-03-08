export class ProductCreatedEvent {
  constructor(
    public readonly name: string,
    public readonly quantity: number,
  ) {}
}
