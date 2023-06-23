function creatLinkeList() {
  let head = null;

  function insertHead(data) {
    const node = {
      value: data,
      next: null,
    };
    if (head == null) return (head = node);

    node.next = head;
    head = node;
  }

  function getHead() {
    if (head == null) return;
    return head;
  }

  function getSize() {
    if (head == null) return 0;
    let count = 0;
    let current = head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  function getTail() {
    if (head == null) return;
    let current = head;
    while (current) {
      if (current.next == null) return current;
      current = current.next;
    }
    return current;
  }

  function getDataByIndex(index) {
    if (head == null) return undefined;
    let i = 0;
    let current = head;
    while (current) {
      if (i === index) return current.value;
      current = current.next;
      i++;
    }
    return undefined;
  }

  function findIndexByData(data) {
    if (head == null) return -1;
    let current = head;
    let i = 0;
    while (current) {
      if (current.value === data) return i;
      current = current.next;
      i++;
    }
    return -1;
  }

  function findIndex(callBack) {
    if (head == null) return -1;
    let i = 0;
    let current = head;
    while (current) {
      if (callBack(current.value)) return i;
      current = current.next;
      i++;
    }
    return -1;
  }

  function find(callBack) {
    if (head == null) return undefined;
    let current = head;
    while (current) {
      if (callBack(current.value)) return current.value;
      current = current.next;
    }
    return undefined;
  }

  function print() {
    if (head == null) return;
    let result = '';
    let current = head;
    while (current) {
      result += current.value + ' ';
      current = current.next;
    }
    console.log(result);
  }

  return {
    insertHead,
    getHead,
    getTail,
    getSize,
    getDataByIndex,
    findIndexByData,
    findIndex,
    find,
    print,
  };
}

const numberList = creatLinkeList();
numberList.insertHead(5);
numberList.insertHead(4);
numberList.insertHead(3);
numberList.insertHead(2);
numberList.insertHead(1);

// console.log('Head:', numberList.getHead());
// console.log('Tail:', numberList.getTail());
// console.log('Size:', numberList.getSize());

// console.log(numberList.getDataByIndex(4));

// console.log(numberList.findIndexByData(5));
// console.log(numberList.findIndexByData(3));
// console.log(numberList.findIndexByData(6));
// console.log(numberList.findIndexByData(-1));

// console.log(numberList.findIndex((x) => x > 0));

console.log(numberList.find((x) => x > 2));

numberList.print();
