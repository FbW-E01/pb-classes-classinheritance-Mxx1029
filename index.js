class Publication {
    identifier;
    author;
    name;
    content;
    created;

    constructor(id = null, authors = null, title = null, content = null) {
        this.identifier = id;
        this.authors = authors;
        this.name = title;
        this.content = content;
        this.created = new Date();
    };

    describe() {
        return `ID of this publication: ${this.identifier}. Title: ${this.name}. Author(s): ${this.authors}`;
    };
};

class Blogpost extends Publication {
    edited;
    address;

    constructor(input1, input2, input3) {
        super(input1, input2, input3);
        this.edited = new Date();
        this.address = null;
    };
};

class Book extends Publication {
    isbn;

    constructor(input1, input2, input3) {
        super(input1, input2, input3);
        this.isbn = null;
    };
};

class Score extends Publication {
    type;

    constructor(input1, input2, input3) {
        super(input1, input2, input3);
        this.type = null;
    };
};

const blog1 = new Blogpost(1, "Mondego", "Where the wind blows");
const book1 = new Book(2, "Albert Moncerf", "The Count can go home");
const score1 = new Score(3, "Mozart", "Another Requiem");

console.log(blog1.describe());
console.log(book1.describe());
console.log(score1.describe());

