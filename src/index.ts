import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";


const twitter = new ShareButtonTwitter(".btn-twitter","http://youtube.com");
twitter.bind();
const facebook = new ShareButtonFacebook(".btn-facebook","http://youtube.com");
facebook.bind();
const linkedin = new ShareButtonLinkedin(".btn-linkedin","http://youtube.com");
linkedin.bind();