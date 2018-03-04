/*

it('should map routes to controllers', function() {
  module('phonecat');

  inject(function($route) {

    expect($route.routes['/phones'].controller).toBe('PhoneListCtrl');
    expect($route.routes['/phones'].templateUrl).
      toEqual('partials/phone-list.html');

    expect($route.routes['/phones/:phoneId'].templateUrl).
      toEqual('partials/phone-detail.html');
    expect($route.routes['/phones/:phoneId'].controller).
      toEqual('PhoneDetailCtrl');

    // otherwise redirect to
    expect($route.routes[null].redirectTo).toEqual('/phones')
  });
});

*/