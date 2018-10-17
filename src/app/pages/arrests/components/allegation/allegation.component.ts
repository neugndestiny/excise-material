import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';
import { NavigationService } from 'app/shared/header-navigation/navigation.service';
import { FormBuilder, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs/observable/combineLatest';
import * as fromModels from '../../models';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-allegation',
  templateUrl: './allegation.component.html',
  styleUrls: ['./allegation.component.scss']
})
export class AllegationComponent implements OnInit, OnDestroy {
  constructor(
    private modelService: NgbModal,
    private activeRoute: ActivatedRoute,
    private navService: NavigationService,
    private router: Router,
    private fb: FormBuilder,
    private store: Store<fromStore.AppState>
  ) {
    this.navService.setPrintButton(false);
    this.navService.setPrevPageButton(true);
    this.navService.setNextPageButton(true);

    this.navService.setInnerTextPrevPageButton('งานจับกุม')
    this.navService.setInnerTextNextPageButton('รับคำกล่าวโทษ')
  }
  private destroy$: Subject<boolean> = new Subject<boolean>();

  card1: boolean = true;
  card2: boolean = true;

  // param: Params
  mode: string;
  arrestCode: string;
  indictmentDetailId: string;
  guiltbaseId: string;

  modal: any;
  showEditField: boolean;

  arrestIndictmentFG = this.fb.group({
    IndictmentID: [''],
    ArrestCode: ['', Validators.required],
    GuiltBaseID: ['', Validators.required],
    IsProve: ['1', Validators.required],
    IsActive: ['1', Validators.required],
    IsLawsuitComplete: ['0', Validators.required],
    ArrestIndictmentDetail: [[]],
    ArrestLawGuitbase: [[]],

    IsModify: ['', Validators.required],
    SubSectionType: ['', Validators.required],
    GuiltBaseName: ['', Validators.required],
    SectionNo: ['', Validators.required],
    PenaltyDesc: ['', Validators.required],
  });

  async ngOnInit() {

    this.navService.showFieldEdit.takeUntil(this.destroy$).subscribe(p => this.showEditField = p.valueOf())

    combineLatest(this.activeRoute.params, this.activeRoute.queryParams)
      .map(results => ({ params: results[0], queryParams: results[1] }))
      .takeUntil(this.destroy$)
      .subscribe(results => {
        this.mode = results.params.mode;
        this.arrestCode = results.queryParams.arrestCode;
        this.indictmentDetailId = results.queryParams.indictmentDetailId;
        this.guiltbaseId = results.queryParams.guiltbaseId;

        switch (this.mode) {
          case 'C':
            // set false
            this.navService.setEditButton(false);
            this.navService.setDeleteButton(false);
            this.navService.setEditField(false);
            // set true
            this.navService.setSaveButton(true);
            this.navService.setCancelButton(true);
            break;

          case 'R':
            // set false
            this.navService.setSaveButton(false);
            this.navService.setCancelButton(false);
            // set true
            this.navService.setEditButton(true);
            this.navService.setDeleteButton(true);
            this.navService.setEditField(true);
            break;
        }
      });

    this.navService.onSave.takeUntil(this.destroy$).subscribe(status => {
      if (status) {
        this.navService.setOnSave(false);
      }
    });
    this.navService.onEdit.takeUntil(this.destroy$).subscribe(status => {
      if (status) {
        this.navService.setOnEdit(false);
      }
    })
    this.navService.onDelete.takeUntil(this.destroy$).subscribe(status => {
      if (status) {
        this.navService.setOnDelete(false);
      }
    })
    this.navService.onNextPage.takeUntil(this.destroy$).subscribe(async status => {
      if (status) {
        await this.navService.setOnNextPage(false);
        this.router.navigate(['/lawsuit/manage', 'C']);
      }
    })
    this.navService.onNextPage.takeUntil(this.destroy$).subscribe(async status => {
      if (status) {
        await this.navService.setOnPrevPage(false);
        this.router.navigate(['/arrest/manage', 'C', 'NEW']);
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  openModal(e) {
    this.modal = this.modelService.open(e, { size: 'lg', centered: true });
  }

  setArrestLawGuiltbase(e: fromModels.ArrestLawGuitbase) {

    if (!e) return;

    let ArrestLawSubSectionRule = e.ArrestLawSubSectionRule
      .find(x => x.SubSectionRuleID == e.SubSectionRuleID);

    let ArrestLawSubSection = ArrestLawSubSectionRule
      .ArrestLawSubSection
      .find(x => x.SectionNo == ArrestLawSubSectionRule.SectionNo);

    let ArrestLawSection = ArrestLawSubSectionRule
      .ArrestLawSection
      .find(x => x.SectionNo == ArrestLawSubSectionRule.SectionNo);

    let ArrestLawPenalty = ArrestLawSection.ArrestLawPenalty
      .find(x => x.SectionNo == ArrestLawSection.SectionNo)

    this.arrestIndictmentFG.patchValue({
      GuiltBaseID: e.GuiltBaseID,
      ArrestLawGuitbase: e,
      IsModify: this.mode == 'C' ? 'c' : 'r',
      SubSectionType: ArrestLawSubSection.SubSectionType,
      GuiltBaseName: e.GuiltBaseName,
      SectionNo: ArrestLawSubSectionRule.SectionNo,
      PenaltyDesc: ArrestLawPenalty.PenaltyDesc,
    })

    this.store.dispatch(new fromStore.CreateArrestIndictment([this.arrestIndictmentFG.value]));
        
  }

}
