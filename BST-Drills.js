const BinarySearchTree = require('./BST')

function main() {
    const BST = new BinarySearchTree;
    const num = [3,1,4,6,9,2,5,7]
    
    num.forEach(n => {
        BST.insert(n);
    })
    
    
    
    console.log(BST)
    
    BST.remove(3);
    console.log(BST)
    
    
    const BST2 = new BinarySearchTree;
    const word =['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O','N']
    
   word.forEach(letter => {
       BST2.insert(letter)
   })
    
   // console.log(BST2)
    
}

function heighOfTree(tree) {
    
    
}

main();