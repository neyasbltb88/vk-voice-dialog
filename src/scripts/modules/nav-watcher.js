import EventEmitter from './EventEmitter';

export default class NavWatcher extends EventEmitter {
    constructor() {
        super();

        this.name = 'NavWatcher';
        this.was_init = false;
        this.originalNavSetLoc = null;
        this.lastNav = null;
    }

    navSetLocDecorator = (...args) => {
        this.emit('setloc', args);
        let res_return = this.originalNavSetLoc.call(window.nav, ...args);

        this.emitLocation();

        return res_return;
    };

    emitLocation() {
        // Чтобы не было дублирующихся срабатываний при установке одной и той же локации несколько раз подряд
        if (this.lastNav !== JSON.stringify(window.nav.objLoc)) {
            // Запоминаем текущую локацию
            this.lastNav = JSON.stringify(window.nav.objLoc);
            this.emit('location', { ...window.nav.objLoc });
        }
    }

    init() {
        if (window.nav && window.nav.setLoc && !this.was_init) {
            // Заменяем родную функцию установки локации на свою
            this.originalNavSetLoc = window.nav.setLoc;
            window.nav.setLoc = this.navSetLocDecorator;

            this.was_init = true;
            this.emit('init', this);
            this.emitLocation();
        } else {
            requestAnimationFrame(() => this.init());
        }
    }

    destroy() {
        if (!this.was_init) return;

        window.nav.setLoc = this.originalNavSetLoc;
        this.originalNavSetLoc = null;
        this.lastNav = null;
        this.was_init = false;
        this.emit('destroy', this);
    }
}
