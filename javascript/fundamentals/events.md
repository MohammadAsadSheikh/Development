# Event Listeners

## What are Events?

Events are user interactions in the browser.

Examples:
- click
- typing
- scrolling
- form submission

---

# addEventListener

Used to listen for events.

## Example

```js
const btn =
  document.querySelector("button");

btn.addEventListener(
  "click",
  () => {
    console.log("Clicked");
  }
);
```

---

# Common Events

| Event | Trigger |
|---|---|
| click | mouse click |
| input | typing |
| submit | form submit |
| keydown | keyboard press |
| change | value change |

---

# Event Object

```js
input.addEventListener(
  "input",
  (e) => {
    console.log(e.target.value);
  }
);
```

---

# What is Event Object?

The event object contains:
- target element
- value
- mouse position
- keyboard key

---

# e.target

Returns element triggering event.

```js
console.log(e.target);
```

---

# Why Events Important?

Events make web applications interactive.