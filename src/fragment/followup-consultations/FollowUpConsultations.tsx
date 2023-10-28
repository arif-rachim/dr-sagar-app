import {Page} from "../components/Page.tsx";

import {P} from "../components/P.tsx";

export function FollowUpConsultations() {
    return <Page title={"Follow Up Consultations"} path={'followup-consultations'}>
        <h1 style={{fontSize: '1.6rem', fontWeight: 400}}>First Follow Up</h1>
        <P>
            This takes place in 4-6 weeks. During the visit, I will assess whether your child has improved with the
            Remedy I prescribed. Please remember that the improvement is gradual over 4-6 weeks and continues even after
            that. The effect of one dose of the correctly chosen Remedy will last for weeks, months and sometimes years
            depending on the child and other factors. If your child definitely shows improvement, he/she will not need a
            further dose of the Remedy until the symptoms return. Please have your diary of the child's progress
            available at the time of follow up consultation. In case, your child does not show any improvement in the
            6-8 weeks period, your child may need a different Remedy. I will analyze the case again, prescribe and
            follow him/her again in 4-6 weeks.
        </P>
        <h1 style={{fontSize: '1.6rem', fontWeight: 400}}>Second and Further Follow Ups</h1>
        <P>
            If your child continues to do well, no further dose is needed and I will follow your child every 2-6 months
            intervals. Sometimes Vaccines, Medications, Anesthesia, etc. may counteract the Homeopathic Remedy and
            child's symptoms will recur. If that happens or new problems develop please contact me and I will be happy
            to see your child and help.
        </P>
    </Page>
}