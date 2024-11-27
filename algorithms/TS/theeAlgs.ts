const tree = [
  {
    value: 20,
    children: [
      {
        value: 1,
        children: [
          {
            value: 1,
          },
        ],
      },
      {
        value: 10,
        children: [
          {
            value: 23,
            children: [
              {
                value: 100,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: 50,
    children: [
      {
        value: 44,
      },
      {
        value: 200,
      },
    ],
  },
];

// 1. recursive sum of tree values
const recursiveSum = (tree: any) => {
  let sum = 0;

  tree.forEach((node) => {
    sum += node.value;

    if (node.children) {
      sum += recursiveSum(node.children);
    }
  });

  return sum;
};

console.log(recursiveSum(tree));
