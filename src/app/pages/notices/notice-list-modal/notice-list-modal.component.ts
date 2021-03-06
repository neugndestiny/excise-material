import { Component, OnInit, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { NoticeService } from '../notice.service';
import { pagination } from '../../../config/pagination';

@Component({
  selector: 'app-notice-list-modal',
  templateUrl: './notice-list-modal.component.html',
  styleUrls: ['./notice-list-modal.component.scss']
})
export class NoticeListModalComponent implements OnInit {

  isOpen = false;
  isCheckAll = false;
  advSearch = false;

  paginage = pagination;

  @Output() d = new EventEmitter();
  @Output() c = new EventEmitter();

  constructor(private noticeServie: NoticeService) {

  }

  ngOnInit() {
  }

  onSearchAdv(f: any) {

  }

  checkAll() {
    this.isCheckAll = !this.isCheckAll;
  }

  toggle() {
    this.advSearch = !this.advSearch;
  }

  dismiss(e: any) {
    this.d.emit(e);
  }

  close(e: any) {
    this.c.emit(e);
  }

  async pageChanges(event) {
    // this.invesList = await this.investigate.slice(event.startIndex - 1, event.endIndex);
  }

}
