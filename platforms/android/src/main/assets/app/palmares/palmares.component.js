"use strict";
var palmares_service_1 = require("./palmares.service");
var core_1 = require("@angular/core");
var PalmaresComponent = (function () {
    function PalmaresComponent(dataService) {
        this.dataService = dataService;
        this.text = 'Palmares Page';
        this.palmaresList = [];
        this.isLoading = false;
    }
    PalmaresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        //console.log(this.dataService.url)
        var base = this;
        this.dataService.getPalmares()
            .subscribe(function (loaded) {
            //this.palmaresList.push(element)
            for (var i = 0; i < 5; i++) {
                base.palmaresList.unshift(loaded[i]);
            }
            _this.isLoading = false;
            //this.palmaresList.push(new Palmares(tmp.name, tmp.dernier, tmp.haut))
            console.log(_this.palmaresList[0].name);
        });
        /*this.palmaresList.forEach((key, value) => {
            console.log(`${key}: ${value}`)
        })*/
    };
    return PalmaresComponent;
}());
PalmaresComponent = __decorate([
    core_1.Component({
        selector: 'palmares',
        templateUrl: 'palmares/palmares.component.html',
        providers: [palmares_service_1.PalmaresService],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [palmares_service_1.PalmaresService])
], PalmaresComponent);
exports.PalmaresComponent = PalmaresComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFsbWFyZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFsbWFyZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx1REFBb0Q7QUFDcEQsc0NBQTBFO0FBUzFFLElBQWEsaUJBQWlCO0lBSTVCLDJCQUFvQixXQUE0QjtRQUE1QixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFIaEQsU0FBSSxHQUFXLGVBQWUsQ0FBQTtRQUM5QixpQkFBWSxHQUFvQixFQUFFLENBQUE7UUFDM0IsY0FBUyxHQUFXLEtBQUssQ0FBQTtJQUNtQixDQUFDO0lBRXBELG9DQUFRLEdBQVI7UUFBQSxpQkFrQkM7UUFqQkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7UUFDdkIsbUNBQW1DO1FBQ25DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFO2FBQzNCLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDWCxpQ0FBaUM7WUFFakMsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDeEMsQ0FBQztZQUNELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1lBQ3hCLHVFQUF1RTtZQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDMUMsQ0FBQyxDQUFDLENBQUE7UUFDSjs7WUFFSTtJQUNOLENBQUM7SUFFSCx3QkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQlksaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7UUFDNUIsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztxQ0FLaUMsa0NBQWU7R0FKckMsaUJBQWlCLENBMEI3QjtBQTFCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWxtYXJlcyB9IGZyb20gJy4vcGFsbWFyZXMnXG5pbXBvcnQgeyBQYWxtYXJlc1NlcnZpY2UgfSBmcm9tICcuL3BhbG1hcmVzLnNlcnZpY2UnXG5pbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhbG1hcmVzJyxcbiAgdGVtcGxhdGVVcmw6ICdwYWxtYXJlcy9wYWxtYXJlcy5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1BhbG1hcmVzU2VydmljZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFBhbG1hcmVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICB0ZXh0OiBzdHJpbmcgPSAnUGFsbWFyZXMgUGFnZSdcbiAgcGFsbWFyZXNMaXN0OiBBcnJheTxQYWxtYXJlcz4gPSBbXVxuICBwdWJsaWMgaXNMb2FkaW5nOmJvb2xlYW4gPSBmYWxzZVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFTZXJ2aWNlOiBQYWxtYXJlc1NlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWVcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuZGF0YVNlcnZpY2UudXJsKVxuICAgIGxldCBiYXNlID0gdGhpc1xuICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0UGFsbWFyZXMoKVxuICAgICAgLnN1YnNjcmliZShsb2FkZWQgPT4ge1xuICAgICAgICAgICAgLy90aGlzLnBhbG1hcmVzTGlzdC5wdXNoKGVsZW1lbnQpXG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspe1xuICAgICAgICAgICAgICAgIGJhc2UucGFsbWFyZXNMaXN0LnVuc2hpZnQobG9hZGVkW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgIC8vdGhpcy5wYWxtYXJlc0xpc3QucHVzaChuZXcgUGFsbWFyZXModG1wLm5hbWUsIHRtcC5kZXJuaWVyLCB0bXAuaGF1dCkpXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5wYWxtYXJlc0xpc3RbMF0ubmFtZSlcbiAgICAgIH0pXG4gICAgLyp0aGlzLnBhbG1hcmVzTGlzdC5mb3JFYWNoKChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YClcbiAgICB9KSovICBcbiAgfVxuXG59XG4iXX0=