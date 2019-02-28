import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksService } from './services/tasks.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { UpdateTaskModalComponent } from './components/dashboard/update-task-modal/update-task-modal.component';
import { StatusChartComponent } from './components/dashboard/status-chart/status-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddTaskComponent,
    UpdateTaskModalComponent,
    StatusChartComponent
  ],
  entryComponents: [
    UpdateTaskModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BlockUIModule.forRoot({
      message: 'Loading...'
    }),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    NgbModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
