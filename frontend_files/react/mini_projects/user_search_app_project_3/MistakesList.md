### Project Mistakes To Avoid

- React components receive only **one argument**, which is the `props` object. If using destructuring, wrap the prop names in `{}`.
  - Example: `({ userDataSet, filterUserName })`

- In JSX, JavaScript expressions (including ternary operators) must be wrapped inside `{}`.
  - Example:
    ```jsx
    {condition ? <CompA /> : <CompB />}
    ```
  - The `true` and `false` branches themselves do **not** need additional `{}` unless you're creating an object.

- When rendering a list using `.map()`, each returned element/component should have a unique `key` prop.
  - Example:
    ```jsx
    <UserCard key={id} name={name} />
    ```

- When renaming a property during destructuring, use the syntax:
  ```jsx
  originalProperty: renamedProperty