import {Page} from "../components/Page.tsx";
import {P} from "../components/P.tsx";

export function FeePayment() {
    return <Page title={'Fees & Payment'} path={'fee-payment'}>
        <h3>First appointment : 1 - 2 hours : $150</h3>
        <p>It includes 1rst Follow up appointment at 4-6 weeks</p>
        <h3>Each Future Follow ups : $100</h3>
        <P>
            I do not accept Insurances, Medicaid or Medicare. Payment is expected at the time of service by credit
            card. If you have to cancel an appointment, you need to notify me 48 hours in advance, if not you will be
            charged a fee of $50.
        </P>
    </Page>
}