class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
console.log(newArray); //MyArray { length: 0, data: {} }
console.log(newArray.get(0)); //undefined

newArray.push('hi');
console.log(newArray); //MyArray { length: 1, data: { '0': 'hi' } }

newArray.push('you');
console.log(newArray); //MyArray { length: 2, data: { '0': 'hi', '1': 'you' } }

newArray.push('!');
console.log(newArray); //MyArray { length: 3, data: { '0': 'hi', '1': 'you', '2': '!' } }

newArray.pop();
console.log(newArray); //MyArray { length: 2, data: { '0': 'hi', '1': 'you' } }

newArray.pop();
console.log(newArray); //MyArray { length: 1, data: { '0': 'hi' } }

newArray.push('you');
newArray.push('!');
console.log(newArray); //MyArray { length: 3, data: { '0': 'hi', '1': 'you', '2': '!' } }

newArray.delete(0);
console.log(newArray); //MyArray { length: 2, data: { '0': 'you', '1': '!' } }

newArray.push('are');
newArray.push('nice');
newArray.delete(1);
console.log(newArray); //MyArray { length: 3, data: { '0': 'you', '1': 'are', '2': 'nice' } }
