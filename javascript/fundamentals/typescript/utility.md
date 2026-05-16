Utility Types

Utility types help transform existing types.

Partial

Makes all properties optional.

Example
interface User {
  name: string;
  age: number;
}

const user: Partial<User> = {
  name: "Asad"
};
Readonly

Prevents modification.

Example
const numbers:
Readonly<number[]> =
  [1,2,3];

Cannot modify array.

Pick

Selects specific properties.

Example
interface User {
  name: string;
  age: number;
  email: string;
}

type UserPreview = Pick<
  User,
  "name" | "email"
>;
Omit

Removes properties.

Example
type UserWithoutAge = Omit<
  User,
  "age"
>;
Why Utility Types Important?

Used heavily in:

APIs
React props
forms
backend DTOs