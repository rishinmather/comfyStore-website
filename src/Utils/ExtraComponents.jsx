export const SelectAmount = (number) => {
  const numbers = Array.from({ length: number }, (_, index) => {
    return index + 1;
  });

  return (
    <>
      {numbers.map((num) => {
        return (
          <option key={num} value={num}>
            {num}
          </option>
        );
      })}
    </>
  );
};
