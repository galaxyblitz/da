"use strict";

//The best way to share data between controllers is by using services. (https://stackoverflow.com/questions/31112939/angularjs-correct-way-to-share-data-between-two-controllers)
angular.module('app').service('dataService', function($http){
    
    this.data = [
        {
            "id": 0,
            "name": "Chintai",
            "path": "#!chintai",
            "logo": "assets/img/EOS42Logo.png",
            "website": "https://github.com/eos42/Chintai",
            "author": "EOS42",
            "license": "Unknown",
            "social_media": [ "https://github.com/eos42/Chintai", "https://t.me/ChintaiEOS" ],
            "tag": [ "leasing", "financing" ],
            "image": [ "assets/img/EOS421.png", "assets/img/EOS422.png", "assets/img/EOS423.png" ],
            "info": [ "LChintai is envisaged to sit alongside other EOS Essentials as a community owned dApp solution for efficient token leasing", "We propose a different approach that provides a highly liquid, transparent token leasing market, and which gives fair market value to all participants regardless of token size holding or token size requirements.", "This will be free to use for both sides as a crucial means of ensuring full market efficiency, functioning and price discovery without transaction fee or pool distortion." ]
        },
        {
            "id": 1,
            "name": "Scatter",
            "path": "#!scatter",
            "logo": "assets/img/scatterLogo.png",
            "website": "http://scatter-eos.com/",
            "author": "Nathan James",
            "license": "MIT",
            "social_media": [ "https://github.com/EOSEssentials/Scatter", "https://twitter.com/Scatter_EOS" ],
            "tag": [ "browser", "wallet", "secure" ],
            "image": [ "assets/img/scatter1.png", "assets/img/scatter2.png", "assets/img/scatter3.png" ],
            "info": [ "Scatter is a way to sign transactions and provide private data without exposing keys and unnecessary information while interacting with web applications communicating with the EOS Blockchain.", "Your public keys and account names are always correct. When a website asks for your accounts you never have to worry about double checking what you copy pasted. Your confidential data is safe and encrypted.",  "Keys and Personal information are always encrypted and inaccessible by websites until you decide to supply it. Scatter helps provide a better User-Experience on the blockchain. Our aim isn't just to provide a secure store for data. It's also about providing the simplest way for you to use it." ]
        },
        {
            "id": 3,
            "name": "Everipedia",
            "path": "#!everipedia",
            "logo": "http://via.placeholder.com/64x64",
            "website": "https://everipedia.org/",
            "author": "Sam Kazemian, Theodor Forselius",
            "license": "Unknown",
            "social_media": [ "https://github.com/EOSEssentials/Scatter", "https://twitter.com/Scatter_EOS" ],
            "tag": [ "browser", "wallet", "secure" ],
            "image": [ "http://via.placeholder.com/1152x450", "http://via.placeholder.com/1152x450" ],
            "info": [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel tellus ornare, vulputate mi sed, porta purus. In sit amet blandit massa. Suspendisse nisl massa, semper sed dictum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta, mauris consequat feugiat commodo, dui dui lobortis elit, eu pellentesque nunc erat at lacus. Phasellus bibendum justo rutrum eros finibus, nec tincidunt sem malesuada. Vivamus at", "risus a risus accumsan commodo at eu tortor. Aenean est neque, cursus in porta quis, tristique id sem. Maecenas vel ligula quam. Quisque nisi nisi, efficitur eget interdum sed, cursus sit amet erat. Donec vitae odio sem. Fusce tincidunt vehicula augue sed laoreet. Donec et ex vulputate, consequat." ]
        },
        {
            "id": 3,
            "name": "Everipedia",
            "path": "#!everipedia",
            "logo": "http://via.placeholder.com/64x64",
            "website": "https://everipedia.org/",
            "author": "Sam Kazemian, Theodor Forselius",
            "license": "Unknown",
            "social_media": [ "https://github.com/EOSEssentials/Scatter", "https://twitter.com/Scatter_EOS" ],
            "tag": [ "browser", "wallet", "secure" ],
            "image": [ "http://via.placeholder.com/1152x450", "http://via.placeholder.com/1152x450" ],
            "info": [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel tellus ornare, vulputate mi sed, porta purus. In sit amet blandit massa. Suspendisse nisl massa, semper sed dictum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta, mauris consequat feugiat commodo, dui dui lobortis elit, eu pellentesque nunc erat at lacus. Phasellus bibendum justo rutrum eros finibus, nec tincidunt sem malesuada. Vivamus at", "risus a risus accumsan commodo at eu tortor. Aenean est neque, cursus in porta quis, tristique id sem. Maecenas vel ligula quam. Quisque nisi nisi, efficitur eget interdum sed, cursus sit amet erat. Donec vitae odio sem. Fusce tincidunt vehicula augue sed laoreet. Donec et ex vulputate, consequat." ]
        }
    ];

});