const _Node = require('./node')

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(iten)
    }
    else {
      let tempNode = this.head
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
    }
  }

  find(item) {
    // start at the head
    let currNode = this.head
    //if the list is empty
    if (!this.head) return null
    //check for the item
    while (currNode.value !== item) {
      // retun null if it's the end of the list and item not found
      if (currNode.next == null) {
        return null
      }
      else {
        currNode = currNode.next
      }
    }
    //found it
    return currNode
  }

  remove(item) {
    // if list is empty
    if (!this.head) return null
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next
      return
    }
    // start at the head
    let currNode = this.head
    //keep track of previous
    let previousNode = this.head

    while ((currNode !== null) && currNode.value !== item) {
      previousNode = currNode
      currNode = currNode.next
    }
    if (currNode === null) {
      console.log('Item not found')
      return
    }
    previousNode.next = currNode.next
  }

  insertBefore(newNode, beforeNode) {
    // if list is empty
    if (!this.head) return null
    //if the node to insertBefore is the head, then insertFirst
    if (this.head.value === newNode) {
      this.insertFirst(newNode)
    }
    else {
      // start at the head
      let currNode = this.head
      //keep track of previous
      let previousNode = this.head
      while ((currNode !== null) && currNode.value !== beforeNode) {
        previousNode = currNode
        currNode = currNode.next
      }
      if (currNode === null) {
        console.log('Item not found')
        return
      }
      //set previous next to newNode and new next to beforeNode
      previousNode.next = new _Node(newNode, beforeNode)
    }
  }

  insertAfter(newNode, afterNode) {
    // if list is empty return null
    if (!this.head) return null
    //if the afterNode is the last node, insertLast
    if (afterNode.head.value === null) {
      this.insertLast(newNode)
    }
    let currNode = this.head
    //keep track of previous
    let previousNode = this.head
    while ((currNode !== null) && previousNode.value !== afterNode) {
      previousNode = currNode
      currNode = currNode.next
    }
    if (currNode === null) {
      console.log('Item not found')
      return
    }
    previousNode.next = new _Node(newNode, currNode)
  }

  insertAt(newNode, position) {
    //if list is empty return null
    if (!this.head) return null


  }
}

module.exports = LinkedList