// 1
class User {
  // 5
  private notebooks: NoteBook[] = [];

  constructor(
    public id: number,
    public name: string,
    public email: string,
    private password: string,
    protected phone: string,
    private age: number
  ) {
    if (age < 18 || age > 60) throw new Error("Age must be between 18 and 60");
  }

  addNotebook(notebook: NoteBook) {
    this.notebooks.push(notebook);
  }

  displayInfo() {
    console.log(this.id, this.name, this.email, this.phone, this.age);
  }
}

// 2
class Admin extends User {
  deleteNote(notebook: NoteBook, noteId: number) {
    notebook.removeNote(noteId);
  }
}

// 3
class Note {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    // 6
    public author: User
  ) {}

  preview() {
    return this.content.slice(0, 20) + "...";
  }
}

// 4
class NoteBook {
  private notes: Note[] = [];

  addNote(id: number, title: string, content: string, author: User) {
    this.notes.push(new Note(id, title, content, author));
  }

  removeNote(id: number) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
}

// 7
class Storage<T> {
  private items: T[] = [];

  addItem(item: T) {
    this.items.push(item);
  }

  removeItem(item: T) {
    this.items = this.items.filter((i) => i !== item);
  }

  getAllItems() {
    return this.items;
  }
}

const user = new User(1, "Ahmed", "ahmed@mail.com", "123456", "01000000000", 25);
const admin = new Admin(2, "Sara", "sara@mail.com", "admin", "01222222222", 30);
const notebook = new NoteBook();
notebook.addNote(1, "Todo", "Finish the TypeScript assignment", user);
user.addNotebook(notebook);
admin.deleteNote(notebook, 1);
user.displayInfo();
console.log(new Note(2, "Hi", "This is a long note content", user).preview());

const storage = new Storage<string>();
storage.addItem("a");
storage.addItem("b");
storage.removeItem("a");
console.log(storage.getAllItems());
