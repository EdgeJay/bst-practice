import TreeNode from './TreeNode';
import Stack from './Stack';

class Tree<T extends number | string> {
  rootNode: TreeNode<T> | null = null;

  /**
   * Perform preOrder traversal of Tree and output results
   */
  preOrderTraversalAndOutput(): Stack<T> {
    if (!this.rootNode) {
      throw new Error('[preOrderTraversalAndOutput] rootNode must be defined');
    }
    const stack = new Stack<T>();
    this._preOrder(this.rootNode, stack);
    console.log(`[preOrderTraversalAndOutput] Result: ${stack.outputAsString()}`);
    return stack;
  }

  private _preOrder(node: TreeNode<T> | null, stack: Stack<T>) {
    if (!node) {
      return;
    }
    stack.push(node.key);
    this._preOrder(node.left, stack);
    this._preOrder(node.right, stack);
  }

  inOrderTraversalAndOutput(): Stack<T> {
    if (!this.rootNode) {
      throw new Error('[inOrderTraversalAndOutput] rootNode must be defined');
    }
    const stack = new Stack<T>();
    this._inOrder(this.rootNode, stack);
    console.log(`[inOrderTraversalAndOutput] Result: ${stack.outputAsString()}`);
    return stack;
  }

  private _inOrder(node: TreeNode<T> | null, stack: Stack<T>) {
    if (!node) {
      return;
    }
    this._inOrder(node.left, stack);
    stack.push(node.key);
    this._inOrder(node.right, stack);
  }

  createBalancedTree(): Tree<T> {
    const nodes = this.inOrderTraversalAndOutput().container;
    const tree = new Tree<T>();
    tree.rootNode = this._balance(nodes, 0, nodes.length - 1);
    return tree;
  }

  private _balance(nodes: T[], start: number, end: number): TreeNode<T> | null {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(nodes[mid]);
    node.left = this._balance(nodes, start, mid - 1);
    node.right = this._balance(nodes, mid + 1, end);

    return node;
  }
}

export default Tree;
