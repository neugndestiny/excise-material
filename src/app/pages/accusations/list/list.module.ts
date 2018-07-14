import { NavigationComponent } from './../../../shared/header-navigation/navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AccusationsService } from '../accusations.service';
import { PaginationTableModule } from '../../component/pagination-table/pagination-table.module';

const routes: Routes = [
    {
        path: '',
        data: {
            urls: [{ title: 'หน้าหลัก', url: '/' }, { title: 'ค้นหาบันทึกรับคำกล่าวโทษ' }],
            codePage: 'XCS60-04-01-00-00',
            pageType: 'list',
            nextPage: { title: 'จัดการข้อมูลบันทึกรับคำกล่าวโทษ', url: '/accusations/manage' }
        },
        component: ListComponent
    }
]

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes),
        PaginationTableModule
    ],
    providers: [NavigationComponent, AccusationsService],
    declarations: [ListComponent]
})
export class ListModule { }
