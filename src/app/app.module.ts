import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { MenuitemComponent } from './menu/menuitem/menuitem.component';
import { MenuComponent } from './menu/menu/menu.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { SortPipe } from './pipes/sort.pipe';
import { UserSearchPipe } from './user/user-search.pipe';
import { VendorSearchPipe } from './user/vendor-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    MenuComponent,
    MenuitemComponent,
    VendorListComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    SortPipe,
    UserSearchPipe,
    VendorSearchPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
