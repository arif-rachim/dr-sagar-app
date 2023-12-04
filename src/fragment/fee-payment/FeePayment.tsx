import {Page} from "../components/Page.tsx";
import {P} from "../components/P.tsx";

export function FeePayment() {
    return <Page title={'Fees & Payment'} path={'fee-payment'}>
        <P style={{fontWeight:'bold'}}>First appointment : 1 - 2 hours : $150</P>
        <P>It includes 1st Follow up appointment at 4-6 weeks</P>
        <P>Each Future Follow ups : $100</P>
        <P>
            I do not accept Insurances, Medicaid or Medicare. Payment is expected at the time of service by credit
            card. If you have to cancel an appointment, you need to notify me 48 hours in advance, if not you will be
            charged a fee of $50.
        </P>
    </Page>
}