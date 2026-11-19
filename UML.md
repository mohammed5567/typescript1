# UML Class Diagram

```mermaid
classDiagram
    class User {
        +id : number
        +name : string
        +email : string
        -password : string
        #phone : string
        -age : number
        -notebooks : NoteBook[]
        +addNotebook(notebook: NoteBook) void
        +displayInfo() void
    }

    class Admin {
        +deleteNote(notebook: NoteBook, noteId: number) void
    }

    class Note {
        +id : number
        +title : string
        +content : string
        +author : User
        +preview() string
    }

    class NoteBook {
        -notes : Note[]
        +addNote(id, title, content, author: User) void
        +removeNote(id: number) void
    }

    class Storage~T~ {
        -items : T[]
        +addItem(item: T) void
        +removeItem(item: T) void
        +getAllItems() T[]
    }

    User <|-- Admin : Inheritance
    NoteBook "1" *-- "0..*" Note : Composition
    User "1" o-- "0..*" NoteBook : Aggregation
    Note "0..*" --> "1" User : Association
```

| Relationship | Classes | Symbol |
|---|---|---|
| Inheritance | Admin → User | hollow triangle |
| Composition | NoteBook ◆— Note | filled diamond |
| Aggregation | User ◇— NoteBook | hollow diamond |
| Association | Note → User | arrow |
