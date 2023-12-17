class ListNode {
    public key: number;
    public val: number;
    public next: ListNode | null;

    constructor(key?: number, val?: number, next?: ListNode) {
        this.key = key === undefined ? 0 : key;
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

class HashMap {
    private _arrLen: number = 100;
    private _hashArray: ListNode[];

    constructor() {
        this._hashArray = new Array(this._arrLen);
        for (let i = 0; i < this._arrLen; i++) {
            this._hashArray[i] = new ListNode();
        }
    }

    get hashArray(): ListNode[] {
        return this._hashArray;
    }

    public put(key: number, value: number): void {
        const index: number = key % this._arrLen;
        // find if key is available in the linkedList and update the value
        let isAvailable: boolean = false;
        let head: ListNode = this._hashArray[index];
        while (head.next !== null) {
            if (head.next.key === key) {
                isAvailable = true;
                head.next.val = value;
                break;
            }

            head = head.next;
        }

        //add data to the list, if not available
        if (!isAvailable) {
            const newNode: ListNode = new ListNode(key, value);
            head.next = newNode;
        }
    }

    public get(key: number): number | null {
        const index: number = key % this._arrLen;
        // find if key is available in the linkedList
        let value: number | null = null;
        let head: ListNode = this._hashArray[index];
        while (head.next !== null) {
            if (head.next.key === key) {
                value = head.next.val;
                break;
            }

            head = head.next;
        }

        return value;
    }

    public remove(key: number): void {
        const index: number = key % this._arrLen;
        let head: ListNode = this._hashArray[index];
        while (head.next !== null) {
            if (head.next.key === key) {
                head.next = head.next.next;
                break;
            }

            head = head.next;
        }
    }
}

export const hashMap = new HashMap();