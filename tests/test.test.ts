test('adds 1 + 2 to equal 3', () => {
    const sum = (n1 : number, n2 : number)=>{
        return n1 + n2;
    }
  expect(sum(1, 2)).toBe(3);
});

