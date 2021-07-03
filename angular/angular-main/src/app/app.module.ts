import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PostComponent } from './post/post.component';
import { ProductsComponent } from './products/products.component';
import { ShortenPipe } from './shorten.pipe';
import { ProductService } from './products/products.service';
import { ObservSampleComponent } from './obsersample.component';
import { ProductListComponent } from './products/list.component';
import { SampleComponent } from './api/sample/sample.component';

import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { InventoryComponent } from './angular-project/computer-parts/inventory/inventory.component';
import { ComputerPartsComponent } from './angular-project/computer-parts/computer-parts.component';


@NgModule({
  declarations: [ //Component,Pipe,Directive
    AppComponent,
    ProductComponent,
    PostComponent,
    ProductsComponent,
    ObservSampleComponent,
    ProductListComponent,
    ShortenPipe,
    SampleComponent,
    InventoryComponent,
    SignupComponent,
    LoginComponent,
    InventoryComponent,
    ComputerPartsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
