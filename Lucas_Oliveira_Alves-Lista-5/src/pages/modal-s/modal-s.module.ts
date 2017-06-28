import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalS } from './modal-s';

@NgModule({
  declarations: [
    ModalS,
  ],
  imports: [
    IonicPageModule.forChild(ModalS),
  ],
  exports: [
    ModalS
  ]
})
export class ModalSModule {}
