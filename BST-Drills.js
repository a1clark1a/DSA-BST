const BinarySearchTree = require('./BST')

function main() {
    const BST = new BinarySearchTree;
    const num = [3,1,4,6,9,2,5,7]
    
    num.forEach(n => {
        BST.insert(n);
    })
    
    console.log(heightOfTree(BST))
    
    //console.log(BST)
    
    //BST.remove(3);
    //console.log(BST)
    
    
    const BST2 = new BinarySearchTree;
    const word =['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O','N']
    
   word.forEach(letter => {
       BST2.insert(letter)
   })
    
   // console.log(BST2)
    console.log(isTreeBST(BST)) //true
    
}

function heightOfTree(tree) {
    if(!tree){
        return 0;
    }
    if(!tree.left && !tree.right){
        return 1;
    }
    let height = 0;
    if(tree.right){
        let rightHeight = 1 + heightOfTree(tree.right);
        if(rightHeight > height) {
            height = rightHeight;
        }
    }
    if(tree.left){
        let leftHeight = 1 + heightOfTree(tree.left);
        if(leftHeight > height) {
            height = leftHeight
        }
    }
    return height;
    
}

function isTreeBST(tree){
    if(!tree){
        return 'empty'
    }
    if(tree.left.key > tree.key){
        return true;
    }
    return false;
}

main();