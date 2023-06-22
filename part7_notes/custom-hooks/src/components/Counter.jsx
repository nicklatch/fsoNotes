import useCounter from '../hooks/useCounter';

const Counter = () => {
  const counter = useCounter();

  return (
    <main>
      <div>{counter.value}</div>
      <button onClick={counter.increase}>Plus</button>
      <button onClick={counter.decrease}>Minus</button>
      <button onClick={counter.zero}>Zero</button>
    </main>
  );
};

export default Counter;
