class Todo {
  id: string
  content: string

  constructor(content: string) {
    this.id = new Date().toISOString()
    this.content = content;
  }
}

export default Todo;
