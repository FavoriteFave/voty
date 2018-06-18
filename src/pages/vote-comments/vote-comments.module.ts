import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoteCommentsPage } from './vote-comments';

@NgModule({
  declarations: [
    VoteCommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(VoteCommentsPage),
  ],
})
export class VoteCommentsPageModule {}
