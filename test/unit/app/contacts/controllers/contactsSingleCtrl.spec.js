'use strict';

describe('ContactsSingleCtrl', function() {
    var ctrl;

    beforeEach(module('ui.router'));
    beforeEach(module('app.contacts'));

    beforeEach(inject(function($controller) {
        ctrl = $controller('ContactsSingleCtrl');
    }));

    it('should be defined', function() {
        expect(ctrl).toBeDefined();
    });

    it('should check password strength', function() {
        ctrl.contact = {
            user: {
                password: '12345'
            }
        };

        expect(ctrl.passwordStrength()).toBe('weak');
    });
});
