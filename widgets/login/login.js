/* globals Midgard, _ */

Midgard.widgets.login = function (opt) {
    _.extend(this, opt);
    this.render();
};
Midgard.widgets.login.prototype = {
    render: function () {
        // show a login form
        // on submit, event a login attempt
        // register for login failure notifications
    }
};