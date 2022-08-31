import { JSDocComment } from "@angular/compiler";
import { Component, ViewChild, ElementRef } from "@angular/core";
import { stringify } from "querystring";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild("myInput") myInput: ElementRef;

  title = "LuongHuuQuySandbox";
  isChangeColor = true;
  inputString = "";
  listTodo = ["Lhquy"];
  isCheck = -1;

  // Chức năng: thêm công việc vào danh sách
  clickBtnAddItemTodoList() {
    console.log(this.myInput.nativeElement);
    this.myInput.nativeElement.focus();
    if (!this.inputString) {
      alert("Bạn chưa nhập công việc !!! ");
      return;
    }
    this.listTodo.push(this.inputString);
    this.inputString = "";
  }

  // Xóa các phần tử trong TodoList
  clickBtnDeleteRow(index) {
    this.listTodo.splice(index, 1);
  }

  // Tích hoàn thành công việc
  clickBtnDone(i) {
    this.isCheck = i;
  }

  // thay ddoir mafu
  clickBtnChange() {
    this.isChangeColor = !this.isChangeColor;
  }
}
