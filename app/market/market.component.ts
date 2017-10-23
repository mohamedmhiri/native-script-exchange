import { Market } from './market'
import { PalmaresService } from '../palmares/palmares.service'
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import {BehaviorSubject} from "rxjs/BehaviorSubject"

@Component({
  selector: 'market',
  templateUrl: 'market/market.component.html',
  providers: [PalmaresService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PalmaresComponent implements OnInit{
  text: string = 'Market Page'
  marketList: Array<Market> = []
  public isLoading:boolean = false
  constructor(private dataService: PalmaresService) {}

  ngOnInit() {
      this.isLoading = true
    //console.log(this.dataService.url)
    let base = this
    this.dataService.getPalmares()
      .subscribe(loaded => {
            //this.palmaresList.push(element)

            for(let i = 0; i < 5; i++){
                base.marketList.push(loaded[i])
            }
            this.isLoading = false
          //this.palmaresList.push(new Palmares(tmp.name, tmp.dernier, tmp.haut))
          console.log(this.marketList[0].name)
      })
    /*this.palmaresList.forEach((key, value) => {
        console.log(`${key}: ${value}`)
    })*/  
  }

}
