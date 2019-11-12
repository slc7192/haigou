import { Component, OnInit } from '@angular/core';
//Component  回车自动生成的
//装饰器  Decorator  装饰器的本质都是函数
@Component({//指定一个函数
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
