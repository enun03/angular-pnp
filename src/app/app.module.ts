import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TasksService } from './services/tasks.service';

import { BlockUIModule } from 'ng-block-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    BlockUIModule.forRoot({
      message: 'Cargando...'
    }),
    AppRoutingModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
