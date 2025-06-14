import {Node} from "./Node.js";

export class LinkedList {
    constructor(){
        this.headNode = null;
    }
    append(value){
        const newNode = new Node(value);
        if(!this.headNode){
            this.headNode = newNode;
        }else{
            let current = this.headNode;
            while(current.nextNode){
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
    }
    size(){
        let count = 0;
        let current = this.headNode;
        while(current){
            count++;
            current = current.nextNode;
        }
        return count;
    }
    head(){
        return this.headNode;
    }
    tail(){
        if(!this.headNode) return null;
        let current = this.headNode;
        while(current.nextNode){
            current = current.nextNode;
        }
        return current;
    }
    at(index){
        if(index < 0) return null;
        let current = this.headNode;
        let curr_index = 0;
        while(current){
            if(curr_index == index) return current;
            curr_index++;
            current = current.nextNode;
        }
        return null;
    }
    pop(){
        if (!this.headNode) return null;
        if(!this.headNode.nextNode){
            const single_node = this.headNode;
            this.headNode = null;
            return single_node;
        }
        let current = this.headNode;
        while(current.nextNode.nextNode){
            current = current.nextNode;
        }
        const pop_node = current.nextNode;
        current.nextNode = null;
        return pop_node;
    }
    contains(value){
        let current = this.headNode;
        while(current){
            if(current.value == value) return true;
            current = current.nextNode;
        }
        return false;
    }
    find(value){
        let current = this.headNode;
        let index = 0
        while(current){
            if(current.value == value) return index;
            index++;
            current = current.nextNode;
        }
        return null;
    }
    toString(){
        let str = '';
        let current = this.headNode;
        while(current){
            str += `(${current.value}) -> `;
            current = current.nextNode;
        }
        str += null;
        return str;
    }
    
}