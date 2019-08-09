//TODO: Исправить баг связанный с тем, если в диалоге сразу же идет изменение внутренних сообщений, т.е добавление, то обсервер не обновляется. 
export default class MessagesWatcher {
    constructor(element, callback) {
        // this.messagesId = new Set();
        this.target = element;
        this.callback = callback;
        this.externalObserver = null;
        this.interiorObserver = null;
        this.timeMessage = 0;
        this.regexp = /^\d+$/m;
    }
    watcher = (element = this.target, callback = this.callback) => {
        this.target = element;
        this.callback = callback;
        this.externalObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type == 'childList') {
                    if (mutation.addedNodes.length !== 0) {
                        const lastChild = mutation.addedNodes[0];
                        const message = lastChild.querySelector('.im-mess');
                        const id = this.regexp.test(message.dataset.msgid);
                        if (id == true) {
                            const newTimeMessage = +message.dataset.ts;
                            if (this.timeMessage == 0) {
                                this.timeMessage = newTimeMessage;
                            } else if (this.timeMessage <= newTimeMessage) {
                                const textBlock = lastChild.querySelector('.im-mess--text');
                                const listMessages = lastChild.querySelector('.ui_clean_list');
                                if (typeof callback == 'function') {
                                    callback(textBlock);
                                    this.interiorWatcher(listMessages);
                                    //TODO:Подумать, нужно ли сохранять id`s в Set this.messagesId.add(+id);
                                }
                            }
                            else {
                                return false;
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
    interiorWatcher = (element, callback = this.callback) => {
        this.interiorObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type == 'childList') {
                    if (mutation.addedNodes.length !== 0) {
                        const lastChild = mutation.addedNodes[0];
                        const id = this.regexp.test(lastChild.dataset.msgid);
                        if (id == true) {
                            const block = lastChild.querySelector('.im-mess--text');
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
    destroy = () => {
        this.externalObserver.disconnect();
        this.interiorObserver.disconnect();
        this.timeMessage = 0;
    }
}