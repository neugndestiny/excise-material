import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: './pages/starter/starter.module#StarterModule'
    }, {
        path: 'notice',
        children: [
            { path: 'list', loadChildren: './pages/notices/list/list.module#ListModule' },
            { path: 'manage/:mode/:code', loadChildren: './pages/notices/manage/manage.module#ManageModule' }
        ]
    }, {
        path: 'arrest',
        children: [
            { path: 'list', loadChildren: './pages/arrests/list/list.module#ListModule' },
            { path: 'manage/:mode/:code', loadChildren: './pages/arrests/manage/manage.module#ManageModule' },
            { path: 'lawbreaker/:mode/:code', loadChildren: './pages/arrests/lawbreaker/lawbreaker.module#LawbreakerModule' }
        ]
    }, {
        path: 'investigation',
        children: [
            { path: 'list', loadChildren: './pages/investigation/list/list.module#ListModule' },
            { path: 'manage/:mode/:code', loadChildren: './pages/investigation/manage/manage.module#ManageModule' },
            {
                path: 'detail-manage/:mode/:code',
                loadChildren: './pages/investigation/detail-manage/detail-manage.module#DetailManageModule'
            }
        ]
    }, {
        path: 'proof',
        children: [
            { path: 'list', loadChildren: './pages/proof/list/list.module#ListModule' },
            { path: 'manage/:mode/:code', loadChildren: './pages/proof/manage/manage.module#ManageModule' }
        ]
    },
    {
        path: 'income',
        children: [
            { path: 'list', loadChildren: './pages/income/list/list.module#ListModule' },
            { path: 'manage/:mode/:code', loadChildren: './pages/income/manage/manage.module#ManageModule' }
        ]
    }, {
        path: 'lawsuit',
        children: [
            { path: 'list', loadChildren: './pages/lawsuit/list/list.module#ListModule' },
            { path: 'manage/:mode', loadChildren: './pages/lawsuit/manage/manage.module#ManageModule' },
            { path: 'detail/:mode', loadChildren: './pages/lawsuit/detail/detail.module#DetailModule' }
        ]
    }, {
        path: 'fine',
        children: [
            { path: 'list', loadChildren: './pages/fine/list/list.module#ListModule' },
            { path: 'manage/:mode/:code1/:code2/:code3', loadChildren: './pages/fine/manage/manage.module#ManageModule' },
            { path: 'detail', loadChildren: './pages/fine/detail/detail.module#DetailModule' },
            { path: 'test', loadChildren: './pages/fine/test/test.module#TestModule' }
        ]
    }, {
        path: 'reward',
        children: [
            { path: 'list', loadChildren: './pages/reward/list/list.module#ListModule' },
            { path: 'manage/:mode/:code', loadChildren: './pages/reward/manage/manage.module#ManageModule' },
            { path: 'bribe/:mode', loadChildren: './pages/reward/bribe/bribe.module#BribeModule' },
            { path: 'reward/:mode/:caseSelect', loadChildren: './pages/reward/reward/reward.module#RewardModule' }
        ]
    }, {
        path: 'reduction',
        children: [
            { path: 'list', loadChildren: './pages/reduction/list/list.module#ListModule' },
            { path: 'manage/:mode', loadChildren: './pages/reduction/manage/manage.module#ManageModule' },
            { path: 'manage/:mode/:code', loadChildren: './pages/reduction/manage-detail/manage-detail.module#ManageDetailModule' }
        ]
    },

    {
        path: 'accordion',
        loadChildren: './pages/component/accordion/accordion.module#AccordionModule'
    }, {
        path: 'alert',
        loadChildren: './pages/component/alert/alert.module#NgAlertModule'
    }, {
        path: 'carousel',
        loadChildren: './pages/component/carousel/carousel.module#ButtonsModule'
    }, {
        path: 'datepicker',
        loadChildren: './pages/component/datepicker/datepicker.module#DatepickerModule'
    }, {
        path: 'dropdown',
        loadChildren: './pages/component/dropdown-collapse/dropdown-collapse.module#DropdownModule'
    }, {
        path: 'modal',
        loadChildren: './pages/component/modal/modal.module#ModalModule'
    }, {
        path: 'pagination',
        loadChildren: './pages/component/pagination/pagination.module#paginationModule'
    }, {
        path: 'Popovertooltip',
        loadChildren: './pages/component/popover-tooltip/popover-tooltip.module#PopoverTooltipModule'
    }, {
        path: 'progressbar',
        loadChildren: './pages/component/progressbar/progressbar.module#progressbarModule'
    }, {
        path: 'rating',
        loadChildren: './pages/component/rating/rating.module#RatingModule'
    }, {
        path: 'tabs',
        loadChildren: './pages/component/tabs/tabs.module#TabsModule'
    }, {
        path: 'timepicker',
        loadChildren: './pages/component/timepicker/timepicker.module#TimepickerModule'
    }, {
        path: 'typehead',
        loadChildren: './pages/component/typehead/typehead.module#TypeheadModule'
    }, {
        path: 'fontawesome',
        loadChildren: './pages/icons/fontawesome/fontawesome.module#FontawesomeModule'
    }, {
        path: 'simpleline',
        loadChildren: './pages/icons/simpleline/simpleline.module#SimplelineIconModule'
    }, {
        path: 'material',
        loadChildren: './pages/icons/material/material.module#MaterialComponentModule'
    }
];
