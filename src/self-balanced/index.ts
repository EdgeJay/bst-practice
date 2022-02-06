import Tree from './Tree';
import TreeNode from './TreeNode';

const tree = new Tree<number>();
tree.rootNode = new TreeNode(10);
tree.rootNode.left = new TreeNode(8);
tree.rootNode.left.left = new TreeNode(7);
tree.rootNode.left.left.left = new TreeNode(6);
tree.rootNode.left.left.left.left = new TreeNode(5);

const balancedTree = tree.createBalancedTree();
balancedTree.preOrderTraversalAndOutput();
console.log(balancedTree.rootNode?.right?.key);
console.log(balancedTree.rootNode?.right?.right?.key);
// console.log(balancedTree.rootNode?.left?.left?.key);
// console.log(balancedTree.rootNode?.left?.right?.key);
