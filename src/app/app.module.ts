import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MachineComponent } from './machine/machine.component';
import { MachinesHeaderHolderComponent } from './machines-header-holder/machines-header-holder.component';
import { MachinesMainHolderComponent } from './machines-main-holder/machines-main-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineComponent,
    MachinesHeaderHolderComponent,
    MachinesMainHolderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
