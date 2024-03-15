import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonFacebook extends AbstractShareButton {

    constructor (clazz: string, url: string){
        super(clazz,url);
    }

    createLink(): string {
        return `https://facebook.com/share?url=${this.url}`;
    }
}

