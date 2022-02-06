import Tree from './Tree';

/**
 * Example of inserting keys into Binary Search Tree (BST)
 */
const insertNode = () => {
  const keys = [15, 10, 20, 8, 12, 16, 25];
  const tree = new Tree<number>();

  let key = keys.shift();
  while (key !== undefined) {
    tree.insertNode(key);
    key = keys.shift();
  }

  tree.inOrderTraversalAndOutput();
  tree.preOrderTraversalAndOutput();

  tree.insertNode(32);
  tree.inOrderTraversalAndOutput();

  tree.insertNode(6);
  tree.inOrderTraversalAndOutput();
};

export default insertNode;
