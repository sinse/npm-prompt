import {EventEmitter} from 'events';

declare module 'prompt' {

    interface Prompt extends EventEmitter {
        logger: EventEmitter;
        started : boolean;
        paused : boolean;
        stopped: boolean;
        allowEmpty: boolean;
        message: string;
        delimiter: string;
        colors: boolean;
        properties: Object;
        
        start(options?: Object): void | Prompt;
        pause(): void | Prompt;
        stop(): void | Prompt;
        resume(): void | Prompt;
        history(search: number | string): any;
        get(schema: any[] | Object | string, callback: Function): any;
        confirm(msg: any[] | Object | string, options?: any, callback?: Function): void;
        getInput(prop: Object | string, callback: Function): any;
        addProperties(obj: Object, properties: any[], callback: Function): any;
    }   

    var foo: Prompt;
    export = foo;
}

