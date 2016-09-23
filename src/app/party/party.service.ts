import { Injectable } from '@angular/core';
const localStorage = require('store');

@Injectable()
export class PartyService {
  
  getNextPartyId(): Promise<number> {
    return new Promise((resolve, reject) => {
      let partyId = localStorage.get('partyId') as number;
      partyId = typeof partyId === 'undefined' ? 1 : ++partyId;
      localStorage.set('partyId', partyId);
      resolve(partyId);
    });
  }
}