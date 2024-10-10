// Define the Post schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  pages: { type: Number, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
});

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  bio: String,
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export const Author = mongoose.model("Author", authorSchema);
export const Book = mongoose.model("Book", bookSchema);

// Creating a post and associating it with a user