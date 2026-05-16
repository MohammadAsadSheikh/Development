Optional Chaining
Definition

Optional chaining safely accesses nested properties.

Problem
user.address.city

If:

address is undefined

application crashes.

Solution
user?.address?.city
Meaning
Only access property if value exists
Real Usage

Used heavily in:

API responses
React state
nested objects