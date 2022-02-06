import Tree from './Tree';
import TreeNode from './TreeNode';

/**
 * Example of creating balanced Binary Search Tree (BST)
 * from sorted array of numbers
 */
const sortedToBST = () => {
  const tree = new Tree<number>();
  tree.rootNode = new TreeNode(10);
  tree.rootNode.left = new TreeNode(8);
  tree.rootNode.left.left = new TreeNode(7);
  tree.rootNode.left.left.left = new TreeNode(6);
  tree.rootNode.left.left.left.left = new TreeNode(5);

  const balancedTree = tree.createBalancedTree();
  balancedTree.preOrderTraversalAndOutput();
};

export default sortedToBST;
