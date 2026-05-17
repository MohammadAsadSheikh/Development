# DOM Selectors

## What are DOM Selectors?

DOM selectors are used to access HTML elements using JavaScript.

They help:
- select elements
- modify content
- attach events
- change styles

---

# getElementById

Selects element using id.

## Example

```js
const title =
  document.getElementById("title");
```

---

# querySelector

Returns the first matching element.

## Example

```js
const btn =
  document.querySelector(".btn");
```

---

# querySelectorAll

Returns all matching elements.

## Example

```js
const items =
  document.querySelectorAll(".item");
```

---

# Loop Through NodeList

```js
items.forEach((item) => {
  console.log(item);
});
```

---

# Difference Between querySelector and querySelectorAll

| querySelector | querySelectorAll |
|---|---|
| first match | all matches |

---

# Common Selectors

| Selector | Meaning |
|---|---|
| #id | select by id |
| .class | select by class |
| tag | select by tag |

---

# Example

```js
document.querySelector("#title");

document.querySelector(".btn");

document.querySelector("h1");
```

---

# Why DOM Selectors Important?

Used in:
- event handling
- UI updates
- forms
- frontend applications