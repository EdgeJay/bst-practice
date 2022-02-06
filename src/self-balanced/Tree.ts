import TreeNode from './TreeNode';
import Stack from './Stack';

class Tree<T extends number | string> {
  rootNode: TreeNode<T> | null = null;

  insertNode(key: T): Tree<T> {
    this.rootNode = this._insert(this.rootNode, key);
    return this;
  }

  private _insert(node: TreeNode<T> | null, key: T): TreeNode<T> {
    if (!node) {
      return new TreeNode(key);
    }
    if (key < node.key) {
      node.left = this._insert(node.left, key);
    } else {
      node.right = this._insert(node.right, key);
    }
    return node;
  }

  findNode(key: T): boolean {
    const node = this._find(this.rootNode, key);
    return !!node;
  }

  private _find(node: TreeNode<T> | null, key: T): TreeNode<T> | null {
    if (!node) {
      return null;
    }
    if (node.key === key) {
      return node;
    }
    if (key < node.key) {
      return this._find(node.left, key);
    }
    if (key > node.key) {
      return this._find(node.right, key);
    }
    return node;
  }

  min(): T | null {
    return this._findMin(this.rootNode);
  }

  private _findMin(node: TreeNode<T> | null): T | null {
    if (!node) {
      return null;
    }
    if (!node.left) {
      return node.key;
    }
    return this._findMin(node.left);
  }

  max(): T | null {
    return this._findMax(this.rootNode);
  }

  private _findMax(node: TreeNode<T> | null): T | null {
    if (!node) {
      return null;
    }
    if (!node.right) {
      return node.key;
    }
    return this._findMax(node.right);
  }

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
