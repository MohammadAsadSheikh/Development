# Event Bubbling

## What is Event Bubbling?

Event bubbling means:
# events move from child → parent

---

# Example HTML

```html
<div id="parent">
  <button id="child">
    Click
  </button>
</div>
```

---

# Event Flow

```txt
button
↓
div
↓
body
↓
document
```

---

# Example

```js
parent.addEventListener(
  "click",
  () => {
    console.log("Parent");
  }
);

child.addEventListener(
  "click",
  () => {
    console.log("Child");
  }
);
```

---

# Output

```txt
Child
Parent
```

---

# stopPropagation()

Stops event bubbling.

## Example

```js
e.stopPropagation();
```

---

# Why Event Bubbling Important?

Used in:
- event delegation
- frontend frameworks
- dynamic UI systems