import config from '../config';
import Xhr from './xhr';
import NavWatcher from './nav-watcher';
import TaskLauncher from './task-launcher';
import WitSpeachApi from './WitSpeachApi';

export default class TestClass {
    constructor() {
        console.log('%c%s', (window.log_color) ? window.log_color.blue : '', 'TestClass');

        this.test();
    }

    test() {

    }
}