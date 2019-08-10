export default class MessagesWatcher {
    constructor(element, callback) {
        this.target = element;
        this.callback = callback;
        this.externalObserver = null;
        this.interiorObserver = null;
        this.timeMessage = 0;
    }
    init = (element = this.target, callback = this.callback) => {
        this.target = element;
        this.callback = callback;
        this.watcher();

        const list = this.target.lastElementChild.querySelector('.ui_clean_list');
        if (list !== undefined)
            this.interiorWatcher(list);
    }
    watcher = () => {
        this.externalObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type == 'childList') {
                    if (mutation.addedNodes.length !== 0) {
                        const lastChild = mutation.addedNodes[0];
                        const message = lastChild.querySelector('.im-mess');
                        const id = /^\d+$/m.test(message.dataset.msgid);
                        if (id == true) {
                            const newTimeMessage = +message.dataset.ts;
                            if (this.timeMessage == 0) {
                                this.timeMessage = newTimeMessage;
                            } else if (this.timeMessage > newTimeMessage) {
                                return false;
                            }
                            const listMessages = lastChild.querySelector('.ui_clean_list');
                            if (typeof this.callback == 'function') {

                                if (this.interiorObserver instanceof MutationObserver) this.interiorObserver.disconnect();

                                this.interiorWatcher(listMessages);
                                this.callback(message);
                            }
                        }
                    }
                }
            });
        })
        this.externalObserver.observe(this.target, {
            childList: true,
        })
    }
    interiorWatcher = (element) => {

        this.interiorObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type == 'childList') {
                    if (mutation.addedNodes.length !== 0) {
                        const lastChild = mutation.addedNodes[0];
                        const id = /^\d+$/m.test(lastChild.dataset.msgid);
                        if (id == true) {
                            if (typeof this.callback == 'function') {
                                this.callback(lastChild);
                            }
                        }
                    }
                }
            })
        })

        this.interiorObserver.observe(element, {
            childList: true,
        })
    }
    destroy = () => {
        this.externalObserver.disconnect();
        this.interiorObserver.disconnect();
        this.timeMessage = 0;
    }
}