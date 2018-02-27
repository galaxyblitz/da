"use strict";

//The best way to share data between controllers is by using services. (https://stackoverflow.com/questions/31112939/angularjs-correct-way-to-share-data-between-two-controllers)
angular.module('app').service('dataService',function($http){
    
    function project (trend, logo, name, rating, website, version, author, licence, tag, image, review, comment) {
        this.trend = trend
        this.logo = logo
        this.name = name
        this.rating = rating
        this.website = website
        this.version = version
        this.author = author
        this.licence = licence
        this.tag = tag
        this.image = image
        this.review = review
        this.comment = comment
    }

    this.scatter = new project(3, 'logo', 'scatter', '4/5', 'http://scatter-eos.com/', 'Live - 2.0 ', 'Nathan James', 'MIT', ['Browser', 'Wallet', 'Transaction', 'Signing Identity'], ['iamgeOne', 'imageTwo', 'imageThree'], 5, 6);
    this.scatter2 = new project(1, 'logo2', 'lkpkjof', '2/5', 'http://scatter-eos.com/', 'Live - 3.0 ', 'King Luc', 'XLO', ['Browser', 'Wallet', 'Zrantyutry', 'Signing Identity'], ['iamgeOne', 'imageTwo', 'imageThree'], 5, 6);
    this.scatter3 = new project(5, 'logo', 'scatter', '4/5', 'http://scatter-eos.com/', 'Live - 2.0 ', 'A new name', 'MIT', ['Browser', 'Wallet', 'Transaction', 'Signing Identity'], ['iamgeOne', 'imageTwo', 'imageThree'], 5, 6);
    this.scatter4 = new project(6, 'logo2', 'lkpkjof', '2/5', 'http://google.com/', 'Live - 3.0 ', 'fgadfghad', 'XLO', ['Browser', 'Wallet', 'Zrantyutry', 'Signing Identity'], ['iamgeOne', 'imageTwo', 'imageThree'], 5, 6);
    this.scatter5 = new project(7, 'logo2', 'lkpkjof', '2/5', 'http://scatter-eos.com/', 'Live - 3.0 ', 'dfgadfga', 'XLO', ['Browser', 'Wallet', 'Zrantyutry', 'Signing Identity'], ['iamgeOne', 'imageTwo', 'imageThree'], 5, 6);
    this.scatter6 = new project(8, 'logo2', 'lkpkjof', '2/5', 'http://google.com/', 'Live - 3.0 ', 'adfgadfg', 'XLO', ['Browser', 'Wallet', 'Zrantyutry', 'Signing Identity'], ['iamgeOne', 'imageTwo', 'imageThree'], 5, 6);
    this.scatter7 = new project(9, 'logo2', 'lkpkjof', '2/5', 'http://google.com/', 'Live - 3.0 ', 'adfgadf', 'XLO', ['Browser', 'Wallet', 'Zrantyutry', 'Signing Identity'], ['iamgeOne', 'imageTwo', 'imageThree'], 5, 6);
    this.scatter8 = new project(2, 'logo2', 'lkpkjof', '2/5', 'http://scatter-eos.com/', 'Live - 3.0 ', 'adfgda', 'XLO', ['Browser', 'Wallet', 'Zrantyutry', 'Signing Identity'], ['iamgeOne', 'imageTwo', 'imageThree'], 5, 6);
    this.scatter9 = new project(10, 'logo2', 'lkpkjof', '2/5', 'http://google.com/', 'Live - 3.0 ', 'rgetrh', 'XLO', ['Browser', 'Wallet', 'Zrantyutry', 'Signing Identity'], ['iamgeOne', 'imageTwo', 'imageThree'], 5, 6);
    this.scatter10 = new project(11, 'logo2', 'lkpkjof', '2/5', 'http://scatter-eos.com/', 'Live - 3.0 ', 'gsfhhg', 'XLO', ['Browser', 'Wallet', 'Zrantyutry', 'Signing Identity'], ['iamgeOne', 'imageTwo', 'imageThree'], 5, 6);

    this.allProjects = [this.scatter, this.scatter2, this.scatter3, this.scatter4, this.scatter5, this.scatter6, this.scatter7, this.scatter8, this.scatter9, this.scatter10];

    this.selectedData = [];
    
});