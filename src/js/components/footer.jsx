import {memo} from "react"
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../i18n/languageSelector";

const Footer = memo(function Footer() {
    const { t } = useTranslation();
    return (
        <footer className='in-footer'>
            <div className='container'>
                <div className="in-footer__wrapper">
                    <a className='in-footer__link' href='#about'>Meta</a>
                    <a className='in-footer__link' href='#about'>{t("footer.about")}</a>
                    <a className='in-footer__link' href='#blog'>{t("footer.blog")}</a>
                    <a className='in-footer__link' href='#jobs'>{t("footer.jobs")}</a>
                    <a className='in-footer__link' href='#help'>{t("footer.help")}</a>
                    <a className='in-footer__link' href='#api'>{t("footer.api")}</a>
                    <a className='in-footer__link' href='#privacy'>{t("footer.privacy")}</a>
                    <a className='in-footer__link' href='#terms'>{t("footer.terms")}</a>
                    <a className='in-footer__link' href='#topAccounts'>{t("footer.topAccounts")}</a>
                    <a className='in-footer__link' href='#locations'>{t("footer.locations")}</a>
                    <a className='in-footer__link' href='#instagramLite'>{t("footer.instagramLite")}</a>
                    <a className='in-footer__link' href='#contact'>{t("footer.contact")}</a>
                    <a className='in-footer__link' href='#metaVerified'>{t("footer.metaVerified")}</a>
                    <LanguageSelector className="in-footer__link border--none select--text"/>
                    <a className='in-footer__link' href='#Instagram'>Instagram</a>
                </div>
            </div>
      </footer>
    )
});

export default Footer;