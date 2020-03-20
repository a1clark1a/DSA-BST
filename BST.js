class BinarySearchTree {
    constructor(key = null, value = null, parent = null){
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
    
    //This produces a balanced tree
    //The average case is O(log(n));
    insert(key, value){
        //if the tree is empty then this key being inserted is the root node of the tree
        if(this.key == null){
            this.key = key;
            this.value = value;
        }
        
        /*if the tree already exists, then start at  the root,
        and compare it to the key you wan to insert.
        If the new key is less than the node's key
        then the new node needs to live in the left-hand branch */
        else if(key < this.key){
            /* If the existing node does not have a left child,
             meaning that if the `left` pointer is empty,
             then we can just instantiate and insert the new node
             as the left child of that node, passing `this` as the parent*/
             if(this.left == null){
                 this.left = new BinarySearchTree(key, value, this);
             }
             /* If the node has an exisiting left child,
             then we recursively call the `insert` method
             so the node is added further down the tree */
             else {
                 this.left.insert(key, value);
             }
        }
        //Similarly, if the new key is greater than the node's key then you do the same thing, but on the right hand side
        else {
            if (this.right == null){
                this.right = new BinarySearchTree(key, value);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }
    
    //The average case is O(log(n))
    //Worst case is O(n);
    //Best case if O(1) if what youre looking for is the root
    find(key){
        //If the item is found at the root then return that value
        if(this.key == key){
            return this.value;
        }
        /*If the item you are looking for is less than the root
        then follow the left child.
        If there is an existing left child,
        then recursively check its left and/or right child
        until you find the item */
        else if(key < this.key && this.left){
            return this.left.find(key)
        }
        /*If the item you are looking for is greather than  the root
        then follow the right child. 
        If there is a n exisiting right child, then recursively check its left and/or right child
        until you find the item  */
        else if(key > this.key && this.right){
            return this.right.find(key)
        }
        //You have searched the tree and the item is not in the tree
        else {
            throw new Error('Key Error')
        }
    }
    
    //Average case is O(log(n))
    //Best case is O(1)
    //Worst case is O(n);
    remove(key){
        if(this.key == key){
            if(this.left && this.right){
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            /*If the node only has a left child,
            then ou replace the node with its left child */
            else if(this.left){
                this._replaceWith(this.left);
            }
            /*And similarly if the node only has a right then you replace it with its right child */
            else if(this.irght){
                this._replaceWith(this.right)
            }
            /*If the node has no children then
            simply remove it and any references to it by calling "this._replaceWith(null)" */
            else {
                this._replaceWith(null)
            }
        }
        else if(key < this.key && this.left){
            this.left.remove(key);
        }
        else if(key > this.key && this.right){
            this.right.remove(key)
        }
        else {
            throw new Error('Key Error')
        }
    }
    
    _replaceWith(node){
        if(this.parent){
            if(this == this.parent.left){
                this.parent.left = node
            }
            else if(this == this.parent.right){
                this.parent.right = node;
            }
            if(node){
                node.parent = this.parent;
            }
        }
        else {
            if(node){
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }
    
    _findMin(){
        if(!this.left){
            return this;
        }
        return this.left._findMin();
    }
    
}

module.exports = BinarySearchTree;