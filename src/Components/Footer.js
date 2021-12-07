import React from 'react'
import { Form } from 'react-bootstrap'

export default function Footer() {
    return (<>
        
        <Form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="BHCRQ9JAKSKYU" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </Form>
        <div className="text-center">
            <p><em>&copy; {new Date().getFullYear()} Lupine Media Group </em></p>
        </div>
        </>
    )
}
