import { Palmares } from './palmares'
import { PalmaresService } from './palmares.service'
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import {BehaviorSubject} from "rxjs/BehaviorSubject"

@Component({
  selector: 'palmares',
  templateUrl: 'palmares/palmares.component.html',
  providers: [PalmaresService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PalmaresComponent implements OnInit{
  text: string = 'Palmares Page'
  palmaresList: Array<Palmares> = []
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
                base.palmaresList.unshift(loaded[i])
            }
            this.isLoading = false
          //this.palmaresList.push(new Palmares(tmp.name, tmp.dernier, tmp.haut))
          console.log(this.palmaresList[0].name)
      })
    /*this.palmaresList.forEach((key, value) => {
        console.log(`${key}: ${value}`)
    })*/  
  }

}
