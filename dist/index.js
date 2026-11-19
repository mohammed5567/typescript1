// 1
class User {
    id;
    name;
    email;
    password;
    phone;
    age;
    // 5
    notebooks = [];
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
        if (age < 18 || age > 60)
            throw new Error("Age must be between 18 and 60");
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
    displayInfo() {
        console.log(this.id, this.name, this.email, this.phone, this.age);
    }
}
// 2
class Admin extends User {
    deleteNote(notebook, noteId) {
        notebook.removeNote(noteId);
    }
}
// 3
class Note {
    id;
    title;
    content;
    author;
    constructor(id, title, content, 
    // 6
    author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
    }
    preview() {
        return this.content.slice(0, 20) + "...";
    }
}
// 4
class NoteBook {
    notes = [];
    addNote(id, title, content, author) {
        this.notes.push(new Note(id, title, content, author));
    }
    removeNote(id) {
        this.notes = this.notes.filter((note) => note.id !== id);
    }
}
// 7
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
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
const storage = new Storage();
storage.addItem("a");
storage.addItem("b");
storage.removeItem("a");
console.log(storage.getAllItems());
export {};
