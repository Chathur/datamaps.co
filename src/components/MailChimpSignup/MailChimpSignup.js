/* eslint-disable max-len */
import React, { Component } from 'react'

import './MailChimpSignup.global.css'
import style from './MailChimpSignup.css'

const MAILCHIMP_FORM_ID = 'MAILCHIMP_FORM'

class MailChimpSignup extends Component {
  static removeScript() {
    const script = document.getElementById(MAILCHIMP_FORM_ID)

    if (!!script) {
      script.parentNode.removeChild(script)
    }
  }

  static createScript(src, callback) {
    const script = document.createElement('script')
    script.id = MAILCHIMP_FORM_ID
    script.type = 'text/javascript';
    script.src = src
    script.onload = callback

    document.body.appendChild(script)
  }

  static mailchimpMagic() {
    /* eslint-disable no-unused-vars */
    (($) => {
      window.fnames = []
      window.ftypes = []
      window.fnames[0] = 'EMAIL'
      window.ftypes[0] = 'email'
      window.fnames[1] = 'FNAME'
      window.ftypes[1] = 'text'
    })(window.jQuery)

    window.$mcj = window.jQuery.noConflict(true)
  }

  static loadValidationScripts() {
    /* eslint-disable no-unused-vars */
    const scriptsSrc = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'

    MailChimpSignup.removeScript()

    MailChimpSignup.createScript(scriptsSrc, () => {
      MailChimpSignup.mailchimpMagic()
    })
    /* eslint-enable */
  }

  static renderForm() {
    return (
      <div id="mc_embed_signup">
        <form action="//datamaps.us14.list-manage.com/subscribe/post?u=a0f03e010de6c97e1c6da625e&amp;id=f68ea09ddb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">

            <div className="mc-field-group">
              <input
                type="email"
                placeholder="Your email"
                name="EMAIL"
                id="mce-EMAIL"
                className={`required email ${style.input}`}
              />
            </div>

            <div className="mc-field-group">
              <input
                type="text"
                placeholder="First name"
                name="FNAME"
                id="mce-FNAME"
                className={`required ${style.input}`}
              />
            </div>

            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: 'none' }} />
              <div className="response" id="mce-success-response" style={{ display: 'none' }} />
            </div>

              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_a0f03e010de6c97e1c6da625e_f68ea09ddb" tabIndex="-1" value="" />
              </div>

              <div>
                <input
                  type="submit"
                  value="Join the beta list"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className={style.button}
                />
              </div>
            </div>
        </form>
      </div>
    )
  }

  componentDidMount() {
    setTimeout(MailChimpSignup.loadValidationScripts, 800)
  }

  render() {
    return (
      <div className="MailChimpSignup">
        {MailChimpSignup.renderForm()}
      </div>
    )
  }
}

export default MailChimpSignup
/* eslint-enable */
