import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
export class TestComponentComponent implements OnInit {
  SecretPassword = 'SecretPassword=tuna';
  howMany = 0;
  detalls = [];

  constructor() {}

  ngOnInit(): void {}

  onClickButton() {
    this.howMany++;
    this.detalls.push(this.howMany);
  }
}
