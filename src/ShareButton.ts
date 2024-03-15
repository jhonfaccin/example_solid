import EventHandler from "./EventHandler"

export default class ShareButton {
    evnetHandler: EventHandler;
    url: string;

    constructor (url: string){
        this.url = url;
        this.evnetHandler = new EventHandler();
    }

    bind (clazz: string, socialNetwork: string){
        let link: string;

        if (socialNetwork === "twitter"){
            link = `https://twitter.com/share?url=${this.url}`;
        }
        if (socialNetwork === "facebook"){
            link = `https://facebook.com/share?url=${this.url}`;
        }
        if (socialNetwork === "linkedin"){
            link = `https://linkedin.com/share?url=${this.url}`;
        }
        this.evnetHandler.addEventListenerToClass(clazz,"click", () => window.open(link));
    }
}

