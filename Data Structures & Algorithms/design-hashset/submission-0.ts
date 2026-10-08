class MyHashSet {
    newhashset:any;
    constructor() {
        this.newhashset =  new Set<number>();;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key: number): void {
        if(!this.newhashset.has(key)) this.newhashset.add(key);
        return;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        if(this.newhashset.has(key)) this.newhashset.delete(key);
        return; 
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
        if(this.newhashset.has(key)) return true;
        else return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
