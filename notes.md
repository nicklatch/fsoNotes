# Random Tids and Bits

## Client Logic

- if props are in an iterable data structure, use a map to iterate and generate markup

```jsx
<ul>
    {props.map(prop => <li key={prop.key} >{prop.content}</li>)}
</ul>
```

## Bear Token

> be sure white spacing is correct in the token getter function!!!
