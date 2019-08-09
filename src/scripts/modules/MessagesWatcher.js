export default class MessagesWatcher {
    
    regexp = /^\d+$/gm;
    
    constructor() {
        this.messagesId = new Set();
        this.target = null;
        this.externalObserver = null;
        this.externalMessage = null;
        this.interiorObserver = null;
        this.interiorMessage = null;
    }
    watcher = (element, callback) => {
        this.target = element;
        this.externalObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type == 'childList') {
                    if (mutation.addedNodes.length !== 0) {
                        const lastChild = mutation.addedNodes[0];
                        const id = this.regexp.exec(lastChild.querySelector('.im-mess').dataset.msgid);
                        if (id !== null) {
                            const block = lastChild.querySelector('.im-mess--text');
                            const listMessages = lastChild.querySelector('.ui_clean_list');
                            if (typeof callback == 'function') {
                                callback(block);
                                this.messagesId.add(id);
                                this.interiorWatcher(listMessages, console.log)
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
    interiorWatcher = (element, callback) => {
        this.interiorObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type == 'childList') {
                    if (mutation.addedNodes.length !== 0) {
                        const lastChild = mutation.addedNodes[0];
                        const id = this.regexp.exec(lastChild.dataset.msgid);
                        if (id !== null) {
                            const block = lastChild.querySelector('.im-mess--text').textContent;
                            if (typeof callback == 'function') {
                                callback(block);
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
}