"use strict";

//The best way to share data between controllers is by using services. (https://stackoverflow.com/questions/31112939/angularjs-correct-way-to-share-data-between-two-controllers)
angular.module('app').service('dataService',function($http){
    
    function project (logo, name, rating, website, version, author, licence, tag, images, reviews, comments) {
        this.logo = logo
        this.name = name
        this.rating = rating
        this.website = website
        this.version = version
        this.author = author
        this.licence = licence
        this.tag = tag
        this.images = images
        this.reviews = reviews
        this.comments = comments
    }

    this.scatter = new project('logo', 'scatter', '4/5', 'http://scatter-eos.com/', 'Live - 2.0 ', 'Nathan James', 'MIT', ['Browser', 'Wallet', 'Transaction', 'Signing Identity'], ['iamgeOne', 'imageTwo', 'imageThree'], 5, 6);
    this.scatter2 = new project('logo2', 'lkpkjof', '2/5', 'http://sgfhdfjdghss.com/22', 'Live - 3.0 ', 'King Luc', 'XLO', ['Browser', 'Wallet', 'Zrantyutry', 'Signing Identity'], ['iamgeOne', 'imageTwo', 'imageThree'], 5, 6);

    this.allProjects = [this.scatter, this.scatter2];

    this.selectedData = [];
    
    //console.log(this.allProjects);
    
});