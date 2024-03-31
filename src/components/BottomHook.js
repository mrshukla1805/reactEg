const BottomHook = () => {
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(i);
  }

  return (
    <div>
      {arr.map((i) => {
        return <div key={i}>{i}</div>;
      })}
    </div>
  );
};

export default BottomHook;
