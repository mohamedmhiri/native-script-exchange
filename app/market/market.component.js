"use strict";
var palmares_service_1 = require("../palmares/palmares.service");
var core_1 = require("@angular/core");
var PalmaresComponent = (function () {
    function PalmaresComponent(dataService) {
        this.dataService = dataService;
        this.text = 'Market Page';
        this.marketList = [];
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
                base.marketList.push(loaded[i]);
            }
            _this.isLoading = false;
            //this.palmaresList.push(new Palmares(tmp.name, tmp.dernier, tmp.haut))
            console.log(_this.marketList[0].name);
        });
        /*this.palmaresList.forEach((key, value) => {
            console.log(`${key}: ${value}`)
        })*/
    };
    return PalmaresComponent;
}());
PalmaresComponent = __decorate([
    core_1.Component({
        selector: 'market',
        templateUrl: 'market/market.component.html',
        providers: [palmares_service_1.PalmaresService],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [palmares_service_1.PalmaresService])
], PalmaresComponent);
exports.PalmaresComponent = PalmaresComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcmtldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGlFQUE4RDtBQUM5RCxzQ0FBMEU7QUFTMUUsSUFBYSxpQkFBaUI7SUFJNUIsMkJBQW9CLFdBQTRCO1FBQTVCLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUhoRCxTQUFJLEdBQVcsYUFBYSxDQUFBO1FBQzVCLGVBQVUsR0FBa0IsRUFBRSxDQUFBO1FBQ3ZCLGNBQVMsR0FBVyxLQUFLLENBQUE7SUFDbUIsQ0FBQztJQUVwRCxvQ0FBUSxHQUFSO1FBQUEsaUJBa0JDO1FBakJHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1FBQ3ZCLG1DQUFtQztRQUNuQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUE7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRTthQUMzQixTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ1gsaUNBQWlDO1lBRWpDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ25DLENBQUM7WUFDRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtZQUN4Qix1RUFBdUU7WUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hDLENBQUMsQ0FBQyxDQUFBO1FBQ0o7O1lBRUk7SUFDTixDQUFDO0lBRUgsd0JBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1FBQzVCLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7cUNBS2lDLGtDQUFlO0dBSnJDLGlCQUFpQixDQTBCN0I7QUExQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFya2V0IH0gZnJvbSAnLi9tYXJrZXQnXG5pbXBvcnQgeyBQYWxtYXJlc1NlcnZpY2UgfSBmcm9tICcuLi9wYWxtYXJlcy9wYWxtYXJlcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXJrZXQnLFxuICB0ZW1wbGF0ZVVybDogJ21hcmtldC9tYXJrZXQuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtQYWxtYXJlc1NlcnZpY2VdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBQYWxtYXJlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgdGV4dDogc3RyaW5nID0gJ01hcmtldCBQYWdlJ1xuICBtYXJrZXRMaXN0OiBBcnJheTxNYXJrZXQ+ID0gW11cbiAgcHVibGljIGlzTG9hZGluZzpib29sZWFuID0gZmFsc2VcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU2VydmljZTogUGFsbWFyZXNTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmRhdGFTZXJ2aWNlLnVybClcbiAgICBsZXQgYmFzZSA9IHRoaXNcbiAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldFBhbG1hcmVzKClcbiAgICAgIC5zdWJzY3JpYmUobG9hZGVkID0+IHtcbiAgICAgICAgICAgIC8vdGhpcy5wYWxtYXJlc0xpc3QucHVzaChlbGVtZW50KVxuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgICAgICAgICAgICAgICBiYXNlLm1hcmtldExpc3QucHVzaChsb2FkZWRbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgLy90aGlzLnBhbG1hcmVzTGlzdC5wdXNoKG5ldyBQYWxtYXJlcyh0bXAubmFtZSwgdG1wLmRlcm5pZXIsIHRtcC5oYXV0KSlcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1hcmtldExpc3RbMF0ubmFtZSlcbiAgICAgIH0pXG4gICAgLyp0aGlzLnBhbG1hcmVzTGlzdC5mb3JFYWNoKChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YClcbiAgICB9KSovICBcbiAgfVxuXG59XG4iXX0=