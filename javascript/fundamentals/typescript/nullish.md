Nullish Coalescing
Definition

Provides fallback value when value is:

null
undefined
Example
const username =
  userName ?? "Guest";
Difference Between || and ??
||

Treats:

false
0
""
null
undefined

as false values.

??

Checks ONLY:

null
undefined
Example
const count = 0;

console.log(count || 10);

Output:

10

because:

0 is falsy
Using ??
console.log(count ?? 10);

Output:

0

because:

0 is NOT null or undefined