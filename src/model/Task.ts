export class Task {
  public readonly id: number;
  public readonly title: string;
  private isCompleted: boolean;

  constructor(title: string) {
    this.id = Date.now();
    this.title = title;
    this.isCompleted = false;
  }

  public markAsCompleted(): Task {
    this.isCompleted = true;
    return this;
  }
}
