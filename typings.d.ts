declare module '*.less' {
    interface IClassName {
        [className: string]: string;
    }
    const classNames: IClassName;
    export = classNames;
}

declare module '*.png' {
    const value: any;
    export = value;
}

declare module '*.jpg' {
    const value: any;
    export = value;
}

declare module '*.svg' {
    const value: any;
    export = value;
}
