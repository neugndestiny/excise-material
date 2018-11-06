import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views/views.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: 'list',
        loadChildren: './views/list/list.module#ListModule',
        data: [
          {
            urls: [
              { title: 'หน้าหลัก', url: '/' },
              { title: 'ค้นหาคำร้องขอรับเงินสินบนรางวัล' }
            ],
            pageType: 'list',
            nextPage: {
              title: 'จัดการข้อมูลคำร้องขอรับเงินสินบนรางวัล',
              url: '/reward/manage'
            }
          }
        ]
      },
      {
        path: 'manage/:IndictmentID',
        loadChildren: './views/manage/manage.module#ManageModule'
      }
    ]
  }
];

export const RewardRoutes = RouterModule.forChild(routes);