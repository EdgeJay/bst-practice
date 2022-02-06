class TreeNode<T extends number | string> {
  key: T;

  left: TreeNode<T> | null = null;

  right: TreeNode<T> | null = null;

  constructor(key: T) {
    this.key = key;
  }
}

export default TreeNode;
