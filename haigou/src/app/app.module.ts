import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent} from './not-found/not-found.component';
import { ProductDetailComponent} from './product-detail/product-detail.component'
import { ProductListComponent } from './product-list/product-list.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { HttpClientModule } from '@angular/common/http'
import { ImagePipe } from './image.pipe';
import { FormsModule } from '@angular/forms'
import { LoginGuard } from './login.guard';

//创建路由词典：为每一个路由组建分配路由地址
let routes=[
  {path:'',redirectTo:'userlogin',pathMatch:'full'},
  {path:'index',component:IndexComponent},
  {path:'productlist',component:ProductListComponent},
  {path:'productdetail/:pid',component:ProductDetailComponent},
  {path:'cart',component:CartComponent,canActivate:[LoginGuard],},//路由能激活码？
  {path:'userlogin',component:UserLoginComponent}
]

@NgModule({
  declarations: [//声明，用于指定模块内部的组件类  声明注册
    AppComponent,  //根组件
    IndexComponent, //自定义组件
    CartComponent,  //自定义组件
    NotFoundComponent, //自定义组件
    ProductDetailComponent, //自定义组件
    ProductListComponent, //自定义组件
    UserLoginComponent, //自定义组件
    ImagePipe  //图片地址转换管道
  ],
  entryComponents: [],
  imports: [
    BrowserModule,  //包含ngfor  ngif
    IonicModule.forRoot(),
    RouterModule.forRoot(routes),//路由
    HttpClientModule,  //该模块提供了httpModule服务
    FormsModule   //包含ngmodel
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
  ],
  bootstrap: [AppComponent]//引导启动组件
})
export class AppModule {}
