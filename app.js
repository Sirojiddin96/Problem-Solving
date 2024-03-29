class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    if (this.root == null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this
          }
          currentNode = currentNode.left;
        } else {
          // right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if (currentNode.value === value) {
        return currentNode
      }
    }
    return false
  }
  remove(value){
    if(!this.root){
      return false
    }
    let currentNode=this.root;
    let parentNode=null;
    
  }
}

const tree = new BinarySearchTree();

tree.insert(9)
tree.insert(4)
tree.insert(6)
this.insert(20)
this.insert(170)
this.insert(15)
this.insert(1)

JSON.stringify(traverse(tree.root))