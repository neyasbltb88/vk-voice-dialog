export default class MessagesWatcher {
    constructor() {
        this.messagesId = new Set();
        this.target = null;
        this.observer = null;
    }
    watcher = (element, callback) => {
        this.target = element;
        this.observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type == 'childList') {
                    if (mutation.addedNodes.length !== 0) {
                        const regexp = /^\d+$/gm;
                        const lastChild = mutation.addedNodes[0];
                        const id = regexp.exec(lastChild.querySelector('.im-mess').dataset.msgid);
                        if (id !== null) {
                            const block = lastChild.querySelector('.im-mess--text');
                            if (typeof callback == 'function') {
                                callback(block)
                            }
                            this.messagesId.add(id);
                        }
                    }
                }
            });
        })
        this.observer.observe(this.target, {
            childList: true,
        })
    }
}