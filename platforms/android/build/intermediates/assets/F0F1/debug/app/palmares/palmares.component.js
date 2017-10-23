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
        this.dataService.getPalmares()
            .subscribe(function (loaded) {
            //this.palmaresList.push(element)
            for (var i = 0; i < 5; i++) {
                _this.palmaresList.push(loaded[i]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFsbWFyZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFsbWFyZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx1REFBb0Q7QUFDcEQsc0NBQTBFO0FBUzFFLElBQWEsaUJBQWlCO0lBSTVCLDJCQUFvQixXQUE0QjtRQUE1QixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFIaEQsU0FBSSxHQUFXLGVBQWUsQ0FBQTtRQUM5QixpQkFBWSxHQUFvQixFQUFFLENBQUE7UUFDM0IsY0FBUyxHQUFXLEtBQUssQ0FBQTtJQUNtQixDQUFDO0lBRXBELG9DQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtRQUN2QixtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7YUFDM0IsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNYLGlDQUFpQztZQUNqQyxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUN2QixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNyQyxDQUFDO1lBQ0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7WUFDeEIsdUVBQXVFO1lBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMxQyxDQUFDLENBQUMsQ0FBQTtRQUNKOztZQUVJO0lBQ04sQ0FBQztJQUVILHdCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxpQkFBaUI7SUFON0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxrQ0FBa0M7UUFDL0MsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztRQUM1QixlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO3FDQUtpQyxrQ0FBZTtHQUpyQyxpQkFBaUIsQ0F3QjdCO0FBeEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhbG1hcmVzIH0gZnJvbSAnLi9wYWxtYXJlcydcbmltcG9ydCB7IFBhbG1hcmVzU2VydmljZSB9IGZyb20gJy4vcGFsbWFyZXMuc2VydmljZSdcbmltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFsbWFyZXMnLFxuICB0ZW1wbGF0ZVVybDogJ3BhbG1hcmVzL3BhbG1hcmVzLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbUGFsbWFyZXNTZXJ2aWNlXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUGFsbWFyZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHRleHQ6IHN0cmluZyA9ICdQYWxtYXJlcyBQYWdlJ1xuICBwYWxtYXJlc0xpc3Q6IEFycmF5PFBhbG1hcmVzPiA9IFtdXG4gIHB1YmxpYyBpc0xvYWRpbmc6Ym9vbGVhbiA9IGZhbHNlXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVNlcnZpY2U6IFBhbG1hcmVzU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZVxuICAgIC8vY29uc29sZS5sb2codGhpcy5kYXRhU2VydmljZS51cmwpXG4gICAgdGhpcy5kYXRhU2VydmljZS5nZXRQYWxtYXJlcygpXG4gICAgICAuc3Vic2NyaWJlKGxvYWRlZCA9PiB7XG4gICAgICAgICAgICAvL3RoaXMucGFsbWFyZXNMaXN0LnB1c2goZWxlbWVudClcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspe1xuICAgICAgICAgICAgICAgIHRoaXMucGFsbWFyZXNMaXN0LnB1c2gobG9hZGVkW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgIC8vdGhpcy5wYWxtYXJlc0xpc3QucHVzaChuZXcgUGFsbWFyZXModG1wLm5hbWUsIHRtcC5kZXJuaWVyLCB0bXAuaGF1dCkpXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5wYWxtYXJlc0xpc3RbMF0ubmFtZSlcbiAgICAgIH0pXG4gICAgLyp0aGlzLnBhbG1hcmVzTGlzdC5mb3JFYWNoKChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YClcbiAgICB9KSovICBcbiAgfVxuXG59XG4iXX0=