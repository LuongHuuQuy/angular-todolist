import { JSDocComment } from '@angular/compiler';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('myInput') myInput: ElementRef;
  test: string = '';

  title = 'LuongHuuQuySandbox';
  isChangeColor = true;
  inputString = '';
  listTodo = [];
  isCheck = -1;
  storage = null;
  listStringStorage = '';
  isShowTodoList = false;

  /**
   * Lifecycle
   */
  ngOnInit() {
    // Lay du lieu tu localstorage
    this.listStringStorage = localStorage.getItem('listItem');
    this.listTodo = JSON.parse(this.listStringStorage);
    this.storage = localStorage.getItem('storage');
  }

  ngOnDestroy() {}
  clickBtnShowTodoList(){
    this.isShowTodoList = !this.isShowTodoList;
  }
  // show item
  showItem(item) {
    this.test = item;
  }

  // Chức năng: thêm công việc vào danh sách
  clickBtnAddItemTodoList() {
    console.log(this.myInput.nativeElement);
    this.myInput.nativeElement.focus();
    if (!this.inputString) {
      alert('Bạn chưa nhập công việc !!! ');
      return;
    }
    let item = { name: '', done: false };
    item.name = this.inputString;
    this.listTodo.push(item);

    // Luu du lieu vao localstorage
    this.storage = Math.round(Math.random() * 100 + 1) + '';
    localStorage.setItem('storage', this.storage);

    localStorage.setItem('listItem', JSON.stringify(this.listTodo));

    this.inputString = '';
  }

  // Xóa các phần tử trong TodoList
  clickBtnDeleteRow(index) {
    this.listTodo.splice(index, 1);
    localStorage.setItem('listItem', JSON.stringify(this.listTodo));
  }

  // Tích/bo tich hoàn thành công việc
  clickBtnDone(i) {
    this.listTodo[i].done = !this.listTodo[i].done;
    localStorage.setItem('listItem', JSON.stringify(this.listTodo));
  }

  // thay ddoir mafu
  clickBtnChange() {
    this.isChangeColor = !this.isChangeColor;
  }

  handleEvent(e) {
    console.log(e);
    console.log('event parent called!!');
  }
  // gionhg computed - dung de tra ra mot gia tri tinh toan
  get countTodolist() {
    return this.listTodo.length;
  }
}
