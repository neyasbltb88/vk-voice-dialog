export default class NavWatcher {
    constructor(callback_param) {
        this.was_init = false;
        this.originalNavSetLoc = null;
        this.callback = callback_param.callback;
        this.callback_ctx = callback_param.context || window;


        this.init();
    }

    navSetLocDecorator() {
        let res_return = this.originalNavSetLoc.call(window.nav, ...arguments);
        let new_loc = Object.assign({}, window.nav.objLoc);

        this.callback.call(this.callback_ctx, new_loc);

        return res_return;
    }

    init() {
        if (window.nav && window.nav.setLoc && !this.was_init) {
            this.was_init = true;
            console.log('%c%s', (window.log_color) ? window.log_color.blue : '', 'NavWatcher: Init');

            this.originalNavSetLoc = window.nav.setLoc;
            window.nav.setLoc = this.navSetLocDecorator.bind(this);
        } else {
            requestAnimationFrame(this.init.bind(this));
        }
    }
}