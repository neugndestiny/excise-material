import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { Routes, RouterModule } from '@angular/router';
import { CardActionsModule } from '../../component/card-actions/card-actions.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllegationModalModule } from '../allegation-modal/allegation-modal.module';
import { StepWizardModule } from '../../component/step-wizard/step-wizard.module';
import { ArrestsService } from '../arrests.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PrintDocModalModule } from '../print-doc-modal/print-doc-modal.module';
import { StoreModule } from '@ngrx/store';
import { productReducer } from '../../../reducers/product.reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalNoticeModule } from '../../component/modal-notice/modal-notice.module';
import { ModalLawbreakerModal } from '../../component/modal-lawbreaker/modal-lawbreaker.module';

const routes: Routes = [
  {
      path: '',
      data: {
          // title: 'จัดการข้อมูล',
          urls: [
              { title: 'หน้าหลัก', url: '/' },
              { title: 'ค้นหางานจับกุม', url: '/arrest/list' },
              { title: 'จัดการข้อมูลบันทึกจับกุม' }
          ],
          nextPage: { title: 'รับคำกล่าวโทษ', url: '/accusations/manage' }
      },
      component: ManageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    StoreModule.forRoot({
      productModule: productReducer
    }),
    RouterModule.forChild(routes),
    ModalLawbreakerModal,
    CardActionsModule,
    AllegationModalModule,
    ModalNoticeModule,
    StepWizardModule,
    PrintDocModalModule
  ],
  declarations: [
    ManageComponent
  ],
  providers: [ArrestsService]
})
export class ManageModule { }
