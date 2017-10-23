"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var http_1 = require("@angular/http");
/*const Http = require('http')
*/
var PalmaresService = (function () {
    function PalmaresService(http) {
        this.http = http;
        this.url = 'https://calm-thicket-38975.herokuapp.com/api';
    }
    /*pushData(data) {
      var headers = new Headers();
          headers.append('Content-Type', 'application/json');
          if(data.temperature < 36.5 || data.temperature > 37.5 || data.heartbear < 120 )
            data.sick = 1
          else data.sick = 0
          return this.http.post('http://localhost:8000/data/', JSON.stringify(data),
           { headers: headers }) .map(response => response.json());
    }*/
    PalmaresService.prototype.getPalmares = function () {
        return this.http.get(this.url + "/palmares")
            .map(function (res) { return res.json(); });
    };
    PalmaresService.prototype.getMarket = function () {
        return this.http.get(this.url + "/market")
            .map(function (res) { return res.json(); });
    };
    return PalmaresService;
}());
PalmaresService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PalmaresService);
exports.PalmaresService = PalmaresService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFsbWFyZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhbG1hcmVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLHNDQUEyQztBQUMzQyxpQ0FBK0I7QUFDL0Isc0NBQXdEO0FBRXhEO0VBQ0U7QUFFRixJQUFhLGVBQWU7SUFFMUIseUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsOENBQThDLENBQUE7SUFDN0QsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gscUNBQVcsR0FBWDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsR0FBRyxjQUFXLENBQUM7YUFDbkMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFRCxtQ0FBUyxHQUFUO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxHQUFHLFlBQVMsQ0FBQzthQUNqQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBR2UsV0FBSTtHQUZuQixlQUFlLENBd0IzQjtBQXhCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcmtldCB9IGZyb20gJy4uL21hcmtldC9tYXJrZXQnO1xuaW1wb3J0IHsgUGFsbWFyZXMgfSBmcm9tICcuLi9wYWxtYXJlcy9wYWxtYXJlcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbi8qY29uc3QgSHR0cCA9IHJlcXVpcmUoJ2h0dHAnKVxuKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWxtYXJlc1NlcnZpY2Uge1xuICB1cmw6IHN0cmluZ1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vY2FsbS10aGlja2V0LTM4OTc1Lmhlcm9rdWFwcC5jb20vYXBpJ1xuICB9XG5cbiAgLypwdXNoRGF0YShkYXRhKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgaWYoZGF0YS50ZW1wZXJhdHVyZSA8IDM2LjUgfHwgZGF0YS50ZW1wZXJhdHVyZSA+IDM3LjUgfHwgZGF0YS5oZWFydGJlYXIgPCAxMjAgKVxuICAgICAgICAgIGRhdGEuc2ljayA9IDFcbiAgICAgICAgZWxzZSBkYXRhLnNpY2sgPSAwXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2RhdGEvJywgSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfSkgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9Ki9cbiAgZ2V0UGFsbWFyZXMoKTogT2JzZXJ2YWJsZTxQYWxtYXJlc1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmx9L3BhbG1hcmVzYClcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gIH1cblxuICBnZXRNYXJrZXQoKTogT2JzZXJ2YWJsZTxNYXJrZXRbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsfS9tYXJrZXRgKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgfVxufVxuIl19