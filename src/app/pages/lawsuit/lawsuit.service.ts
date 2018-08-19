import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { appConfig } from "../../app.config";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Lawsuit } from "./models/lawsuit";
import {Notice} from "../notices/notice";

@Injectable()
export class LawsuitService {

  private httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

  constructor(private http: HttpClient) { }

  private async responsePromiseGet(params: string, url: string) {
    const res = await this.http.post<any>(url, params, this.httpOptions).toPromise();
    if (!res.IsSuccess || !(res.ResponseData || []).length) { return []; }
    return res.ResponseData
  }

  async getByKeywordOnInt(): Promise<Lawsuit[]> {
    const params = { 'Textsearch': '' };
    const url = `${appConfig.api8083}/LawsuitgetByKeyword`;
    const res = await this.http.post<any>(url, JSON.stringify(params), this.httpOptions).toPromise();
    if (res.IsSuccess) {
      return res.ResponseData
    }
  }

  getByKeyword(filterValue: any): Promise<Lawsuit[]> {
    const params = filterValue === '' ? { 'Textsearch': '' } : filterValue;
    const url = `${appConfig.api8083}/LawsuitgetByKeyword`;
    return this.responsePromiseGet(JSON.stringify(params), url)
  }

  getByConAdv(form: any): Promise<Lawsuit[]> {
    const url = `${appConfig.api8083}/LawsuitgetByConAdv`;
    return this.responsePromiseGet(JSON.stringify(form), url)
  }

  async ArrestgetByCon(ArrestCode) {
    const params = { ArrestCode: ArrestCode };
    const url = `${appConfig.api7788}/ArrestgetByCon`;
    const res = await this.http.post<any>(url, JSON.stringify(params), this.httpOptions).toPromise();
    if (res.IsSuccess) {
      return res.ResponseData
    }
  }

  async LawsuitgetByCon(LawsuitID) {
    const params = { LawsuitID: LawsuitID };
    const url = `${appConfig.api8083}/LawsuitgetByCon`;
    const res = await this.http.post<any>(url, JSON.stringify(params), this.httpOptions).toPromise();
    if (res.IsSuccess) {
      return res.ResponseData
    }
  }

  async CompareMasLawgetByCon(GuiltBaseID) {
    const params = { GuiltBaseID: GuiltBaseID };
    const url = `${appConfig.api8881}/CompareMasLawgetByCon`;
    const res = await this.http.post<any>(url, JSON.stringify(params), this.httpOptions).toPromise();
    // if (res.IsSuccess) {
    //   return res.ResponseData
    // }
    return res
  }








  // async getByKeyword(filterValue) {
  //   const params = JSON.stringify(filterValue);
  //   const url = `${appConfig.api8083}/LawsuitgetByKeyword`;
  //   const res = await this.http.post<any>(url, JSON.stringify(params), this.httpOptions).toPromise();
  //   if (res.IsSuccess) {
  //     return res.ResponseData
  //   }
  //   // try {
  //   //   const res = await this.http
  //   //     .post(url, params, this.httpOptions)
  //   //     .toPromise();
  //   //   return res.json();
  //   // } catch (error) {
  //   //   await alert(error);
  //   // }
  // }
  //
  // async LawSuitgetByConAdv(advForm) {
  //   const params = JSON.stringify({ advForm });
  //   const url = `${appConfig.api8083}/LawSuitgetByConAdv`;
  //   try {
  //     const res = await this.http
  //       .post(url, params, this.httpOptions)
  //       .toPromise();
  //     return res.json();
  //   } catch (error) {
  //     await alert(error);
  //   }
  // }
  //
  // async LawsuitArrestgetByCon(ArrestCode) {
  //   const params = JSON.stringify({ ArrestCode: ArrestCode });
  //   const url = `${appConfig.api8083}/LawsuitArrestgetByCon`;
  //   try {
  //     const res = await this.http
  //       .post(url, params, this.httpOptions)
  //       .toPromise();
  //     return res.json();
  //   } catch (error) {
  //     await alert(error);
  //   }
  // }
  //
  // async LawsuitgetByCon(LawsuitID) {
  //   const params = JSON.stringify({ LawsuitID: LawsuitID });
  //   const url = `${appConfig.api8083}/LawsuitgetByCon`;
  //   try {
  //     const res = await this.http
  //       .post(url, params, this.httpOptions)
  //       .toPromise();
  //     return res.json();
  //   } catch (error) {
  //     await alert(error);
  //   }
  // }
  //
  // async ArrestgetByCon(ArrestCode) {
  //   const params = JSON.stringify({ ArrestCode: ArrestCode });
  //   const url = `${appConfig.api7788}/ArrestgetByCon`;
  //   try {
  //     const res = await this.http
  //       .post(url, params, this.httpOptions)
  //       .toPromise();
  //     return res.json();
  //   } catch (error) {
  //     await alert(error);
  //   }
  // }
  //
  // async CompareMasLawgetByCon(GuiltBaseID) {
  //   const params = JSON.stringify({ GuiltBaseID: GuiltBaseID });
  //   const url = `${appConfig.api8881}/CompareMasLawgetByCon`;
  //   try {
  //     const res = await this.http
  //       .post(url, params, this.httpOptions)
  //       .toPromise();
  //     return res.json();
  //   } catch (error) {
  //     await alert(error);
  //   }
  // }




  // async ArrestLawbreakergetByCon(LawbreakerID) {
  //   const params = JSON.stringify({ LawbreakerID: LawbreakerID });
  //   const url = `${appConfig.api7788}/ArrestLawbreakergetByCon`;
  //   try {
  //     const res = await this.http
  //       .post(url, params, this.httpOptions)
  //       .toPromise();
  //     return res.json();
  //   } catch (error) {
  //     await alert(error);
  //   }
  // }
  //
  // async LawsuitupdByCon(LawsuitList) {
  //   const params = JSON.stringify(LawsuitList);
  //   const url = `${appConfig.api8083}/LawsuitupdByCon`;
  //   try {
  //     const res = await this.http
  //       .post(url, params, this.httpOptions)
  //       .toPromise();
  //     return res.json();
  //   } catch (error) {
  //     await alert(error);
  //   }
  // }
  //
  // async LawsuitupdDelete(LawsuitID) {
  //   const params = JSON.stringify({ LawsuitID: LawsuitID });
  //   const url = `${appConfig.api8083}/LawsuitupdDelete`;
  //   try {
  //     const res = await this.http
  //       .post(url, params, this.httpOptions)
  //       .toPromise();
  //     return res.json();
  //   } catch (error) {
  //     await alert(error);
  //   }
  // }
}
