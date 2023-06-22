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
    print,
  };
}

const numberList = creatLinkeList();
numberList.insertHead(5);
numberList.insertHead(4);
numberList.insertHead(3);
numberList.insertHead(2);
numberList.insertHead(1);

numberList.print();
