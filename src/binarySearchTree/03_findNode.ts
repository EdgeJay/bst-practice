import Tree from './Tree';

/**
 * Example of searching for key into Binary Search Tree (BST)
 */
const findNode = () => {
  const keys = [15, 10, 20, 8, 12, 16, 25];
  const tree = new Tree<number>();

  let key = keys.shift();
  while (key !== undefined) {
    tree.insertNode(key);
    key = keys.shift();
  }

  console.log(`Is "16" in tree: ${tree.findNode(16)}`);
  console.log(`Is "17" in tree: ${tree.findNode(17)}`);
  console.log(`Is "15" in tree: ${tree.findNode(15)}`);
  console.log(`Is "20" in tree: ${tree.findNode(20)}`);
  console.log(`Is "31" in tree: ${tree.findNode(31)}`);
  console.log(`Is "8" in tree: ${tree.findNode(8)}`);

  tree.insertNode(32);
  console.log(`Is "32" in tree: ${tree.findNode(32)}`);

  console.log(`Smallest value in tree is ${tree.min()}`);
  console.log(`Biggest value in tree is ${tree.max()}`);
};

export default findNode;
