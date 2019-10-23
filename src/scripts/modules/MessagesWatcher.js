import EventEmitter from './EventEmitter';

export default class MessagesWatcher extends EventEmitter {
    constructor() {
        super();

        this.name = 'MessagesWatcher';
        this.target = null;
        this.callback = null;
        this.externalObserver = null;
        this.interiorObserver = null;
        this.timeMessage = null;
        this.isInit = false;

        this.mutationsCount = 0;
    }

    init = element => {
        if (this.isInit) return;
        this.isInit = true;
        this.target = element;
        this.timeMessage = Math.floor(+new Date() / 1000);
        this.watcher();

        const list = this.target.lastElementChild.querySelector('.ui_clean_list');
        if (list !== null) this.interiorWatcher(list);

        this.emit('init', this);
    };

    watcher = () => {
        this.externalObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                this.mutationsCount++;

                // TODO: Проверить количество запусков на этой точке
                // debugger;

                if (mutation.type == 'childList' && mutation.addedNodes.length !== 0) {
                    const lastChild = mutation.addedNodes[0];
                    const message = lastChild.querySelector('.im-mess');
                    if (message && /^\d+$/m.test(message.dataset.msgid)) {
                        const newTimeMessage = +message.dataset.ts;

                        if (newTimeMessage < this.timeMessage) return false;

                        const listMessages = lastChild.querySelector('.ui_clean_list');
                        if (this.interiorObserver) this.interiorObserver.disconnect();

                        this.interiorWatcher(listMessages);

                        this.emit('message', message);
                    }
                }
            });
        });
        this.externalObserver.observe(this.target, {
            childList: true
        });
    };

    interiorWatcher = element => {
        this.interiorObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type == 'childList') {
                    if (mutation.addedNodes.length !== 0) {
                        const lastChild = mutation.addedNodes[0];
                        const id = /^\d+$/m.test(lastChild.dataset.msgid);
                        if (id == true) {
                            this.emit('message', lastChild);
                        }
                    }
                }
            });
        });

        this.interiorObserver.observe(element, {
            childList: true
        });
    };

    destroy = () => {
        if (!this.isInit) return;

        this.isInit = false;
        this.externalObserver.disconnect();
        this.interiorObserver.disconnect();
        this.timeMessage = null;
        this.mutationsCount = 0;

        console.log('%c%s', window.log_color ? window.log_color.blue : '', 'MessagesWatcher:destroy');
        this.emit('destroy', this);
    };
}
