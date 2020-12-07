function LinkedList(){
  let Node = function(element){
    this.element = element;
    this.next = null;
  };
  let length = 0;
  let head = null;

  //向列表尾部添加一个新的项
  this.append = function(element){
    let node = new Node(element),current;
    if(head===null){
      head = node;
    }else{
      current = head;
      //循环列表，知道找到最后一项
      while(current.next){
        current = current.next;
      }
      //找到最后一项，将其next赋值为node，建立连接
      current.node = next;
    }
    //更新列表的长度
    length++;
  };
  //向列表的特定位置添加一个新的项
  this.insert = function(position,element){}
  //从列表的特定位置移除一项
  this.removeAt = function(position){}
  //从列表中移除一项
  this.remove  = function(element){}
  //返回元素在列表中的索引，如果列表中没有该元素则返回-1
  this.indexOf = function(element){}
  //如果链表不包含任何元素返回true
  this.isEmpty = function(){}
  //返回链表包含的元素个数
  this.size = function(){}
  
  this.getHead = function(){}
  //重写toString方法，让其只输出元素的值
  this.toString = function(){}
  this.print = function(){}
}