import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";
import AbstractShareButton from "./AbstractShareButton";


const twitter: AbstractShareButton = new ShareButtonTwitter(".btn-twitter", "http://youtube.com");
twitter.bind();
const facebook: AbstractShareButton = new ShareButtonFacebook(".btn-facebook", "http://youtube.com");
facebook.bind();
const linkedin: AbstractShareButton = new ShareButtonLinkedin(".btn-linkedin", "http://youtube.com");
linkedin.bind();
const print: AbstractShareButton = new ShareButtonPrint(".btn-print");
print.bind();