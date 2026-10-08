class MyHashMap {
    newhashmap = new Map<number, number>();
    constructor() {}

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        this.newhashmap.set(key, value);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if(this.newhashmap.has(key)) return this.newhashmap.get(key);
        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        this.newhashmap.delete(key);
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
