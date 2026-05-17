# Event Delegation

## What is Event Delegation?

Event delegation means:
# using one parent listener for multiple child elements

---

# Why Use Event Delegation?

Instead of:
```txt
100 child listeners
```

Use:
```txt
1 parent listener
```

Improves:
- performance
- memory usage

---

# Example

```js
list.addEventListener(
  "click",
  (e) => {

    if (
      e.target.tagName === "LI"
    ) {

      console.log(
        e.target.textContent
      );
    }
  }
);
```

---

# Why It Works?

Because:
# events bubble upward

---

# Benefits

- better performance
- dynamic element support
- cleaner code

---

# Real Usage

Used heavily in:
- React
- tables
- large lists
- dynamic UI