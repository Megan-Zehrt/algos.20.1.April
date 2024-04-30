// 700. Search in a Binary Search Tree

// You are given the root of a binary search tree (BST) and an integer val.
//Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

var searchBST = function(root, val) {
    
    function dfs(node, value){

        if(node == null){
            return null
        }
        
        if(node.val == value){
            return node
        }
        else{
            if(node.val > value){
               return dfs(node.left, value)
            }
            else{
               return dfs(node.right, value)
            }
        }
    }

    return dfs(root, val)
};