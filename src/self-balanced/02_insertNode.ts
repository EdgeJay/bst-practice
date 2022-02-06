import Tree from './Tree';
import TreeNode from './TreeNode';

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
};

export default insertNode;
