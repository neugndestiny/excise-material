import { CardActionsModule } from '../../component/card-actions/card-actions.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ManageDetailComponent } from './manage-detail.component';


const routes: Routes = [
  {
    path: '',
    data: {
      urls: [
        { title: 'หน้าหลัก', url: '/' },
        { title: 'ค้นหารายการปรับเพิ่ม-ปรับลด', url: '/reduction/list' },
        { title: 'จัดการข้อมูลรายการปรับเพิ่ม-ปรับลด', url: 'reduction/manage/' },
        { title: 'จัดการข้อมูลรายละเอียดการปรับเพิ่ม-ปรับลด' }
      ],
      pageType: 'manage',
      codePage: 'ILG60-09-03-00-00',
    },
    component: ManageDetailComponent
  }

];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    CardActionsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ManageDetailComponent
  ]
})
export class ManageDetailModule { }
