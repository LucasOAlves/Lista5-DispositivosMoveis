import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechnologyPage } from './technology-page';

@NgModule({
  declarations: [
    TechnologyPage,
  ],
  imports: [
    IonicPageModule.forChild(TechnologyPage),
  ],
  exports: [
    TechnologyPage
  ]
})
export class TechnologyPageModule {}
