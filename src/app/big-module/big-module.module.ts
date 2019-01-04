import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigFeatureComponentComponent } from './big-feature-component/big-feature-component.component';

import { BigModuleRoutingModule } from './big-module-routing.module';

@NgModule({
  declarations: [
    BigFeatureComponentComponent
  ],
  imports: [
    CommonModule,
    BigModuleRoutingModule
  ]
})
export class BigModuleModule { }
