# Local Storage & Session Storage

## What is Local Storage?

LocalStorage stores:
# persistent browser data

Data remains after:
- refresh
- browser restart

---

# Store Data

```js
localStorage.setItem(
  "name",
  "Asad"
);
```

---

# Retrieve Data

```js
const name =
  localStorage.getItem("name");
```

---

# Remove Data

```js
localStorage.removeItem(
  "name"
);
```

---

# Clear All Data

```js
localStorage.clear();
```

---

# IMPORTANT

LocalStorage stores:
# strings only

---

# Store Object

```js
const user = {
  name: "Asad"
};

localStorage.setItem(
  "user",
  JSON.stringify(user)
);
```

---

# Retrieve Object

```js
const user =
  JSON.parse(
    localStorage.getItem("user")
  );
```

---

# Why JSON.stringify Needed?

Because:
```txt
localStorage stores only strings
```

---

# What is Session Storage?

SessionStorage stores temporary data.

Data removed when:
# tab closes

---

# Difference Between localStorage and sessionStorage

| localStorage | sessionStorage |
|---|---|
| persistent | temporary |
| survives refresh | removed on tab close |

---

# Real Usage

Used for:
- authentication
- themes
- cart data
- temporary session data