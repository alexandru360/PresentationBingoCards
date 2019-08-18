import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetingRunningComponent } from './meeting-running/meeting-running.component';


const routes: Routes = [

    
    {path: 'meetings/:id', component: MeetingRunningComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
