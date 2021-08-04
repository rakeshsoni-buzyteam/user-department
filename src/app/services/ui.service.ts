import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalVariable } from '../core/global';

import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    private _location: Location
  ) { }

  // localstorage setvalue, clear and get value start
  getToken() {
    if (!!localStorage.getItem(GlobalVariable.tokenKey)) {
      return localStorage.getItem(GlobalVariable.tokenKey)
    } else {
      return '';
    }
  }

  setToken(data) {
    localStorage.setItem(GlobalVariable.tokenKey, data);
  }

  setLocalData(key: string, data: any, json?: boolean) {
    localStorage.setItem(key, json ? JSON.stringify(data) : data);
  }

  getLocalData(key: string, json?: boolean) {
    let _data: any = null;
    try {
      _data = json
        ? JSON.parse(localStorage.getItem(key))
        : localStorage.getItem(key);
      return _data;
    } catch (error) {
      if (error instanceof SyntaxError) this.clearLocalData(key);
      return null;
    }
  }

  clearAllLocalData() {
    localStorage.clear();
  }

  clearLocalData(key: string) {
    localStorage.removeItem(key);
  }
  // localstorage setvalue, clear and get value end

  goBack() {
    this._location.back();
  }

  cal(page, limit, count) {
    if (page * limit <= count) {
      return page * limit;
    } else {
      return count;
    }
  }
  
  getRole() {
    let decoded: any = jwt_decode(this.getToken());
    if(decoded && decoded.type) {
      return decoded.type;
    }
  }

}
