import {Page} from "../components/Page";
import {
    ButtonHTMLAttributes, CSSProperties,
    InputHTMLAttributes,
    PropsWithChildren,
    TextareaHTMLAttributes, useId, useRef
} from "react";
import {colors} from "../colors";
import {P} from "../components/P.tsx";

const Input = (properties: PropsWithChildren<InputHTMLAttributes<HTMLInputElement> & {
    containerStyle?: CSSProperties
}>) => {
    const {containerStyle, ...props} = properties;
    return <label style={{display: 'flex', flexDirection: 'column', ...containerStyle}}>
        <div style={{fontSize: '0.9rem', paddingLeft: '0.5rem'}}>{props.title}</div>
        <input {...props} style={{
            border: 'none',
            background: 'rgba(255,255,255,0.5)',
            padding: '0.7rem 0.5rem',
            fontSize: '1.2rem',
            color: '#333',
            width: '100%', ...props.style
        }}/>
    </label>
}

const Button = (props: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
    return <button {...props} style={{
        border: 'none',
        background: 'rgba(255,255,255,0.5)',
        padding: '0.7rem 0.5rem',
        fontSize: '1.2rem',
        color: '#fff',
        width: '100%',
        backgroundColor: colors.second, ...props.style
    }}>{props.children}</button>
}
const TextArea = (properties: PropsWithChildren<TextareaHTMLAttributes<HTMLTextAreaElement> & {
    containerStyle?: CSSProperties
}>) => {
    const {containerStyle, ...props} = properties;
    return <label style={{display: 'flex', flexDirection: 'column', ...containerStyle}}>
        <div style={{fontSize: '0.9rem', paddingLeft: '0.5rem'}}>{props.title}</div>
        <textarea {...props} style={{
            border: 'none',
            background: 'rgba(255,255,255,0.5)',
            padding: '0.7rem 0.5rem',
            fontSize: '1.2rem',
            color: '#333',
            width: '100%', ...props.style
        }}>{props.children}</textarea>
    </label>
}

type Customer = { name: string, email: string, phone: string, childName: string, childDoB: string, message: string };

export function Appointment() {
    const id = useId();
    const triggeredButtonRef = useRef<'email' | 'phone' | 'sms'>('email');

    function sendEmail(props: Customer) {
        const a = document.createElement('a');
        const title = `From ${props.name} parents of ${props.childName}`;
        const message = `Parent : ${props.name}
Child  : ${props.childName} 
DoB    : (${props.childDoB} / ${calculateAge(new Date(props.childDoB))}) 
Email  : ${props.email} 
Phone  : ${props.phone}

${props.message}
`;
        const href = `mailto:pedsagar@gmail.com?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(message)}`;
        const linkId = `mail-${id}`;
        a.setAttribute('id', linkId);
        a.setAttribute('href', href);
        document.body.appendChild(a);
        const linkElement = document.getElementById(linkId)!;
        linkElement.click();
        linkElement.remove();
    }

    function sendSms(props: Customer) {
        const a = document.createElement('a');
        const message = `Parent : ${props.name}
Child  : ${props.childName} 
DoB    : (${props.childDoB} / ${calculateAge(new Date(props.childDoB))}) 
Email  : ${props.email} 
Phone  : ${props.phone}

${props.message}
`;
        const href = `sms:+14109539347?body=${encodeURIComponent(message)}`;
        const linkId = `sms-${id}`;
        a.setAttribute('id', linkId);
        a.setAttribute('href', href);
        document.body.appendChild(a);
        const linkElement = document.getElementById(linkId)!;
        linkElement.click();
        linkElement.remove();
    }

    function sendWhatsApp(props: Customer) {
        const a = document.createElement('a');

        const message = `Parent : ${props.name}
Child  : ${props.childName} 
DoB    : (${props.childDoB} / ${calculateAge(new Date(props.childDoB))}) 
Email  : ${props.email} 
Phone  : ${props.phone}

${props.message}
`;
        const href = `https://wa.me/+14109539347?text=${encodeURIComponent(message)}`;
        const linkId = `wa-${id}`;
        a.setAttribute('id', linkId);
        a.setAttribute('href', href);
        document.body.appendChild(a);
        const linkElement = document.getElementById(linkId)!;
        linkElement.click();
        linkElement.remove();
    }

    return <Page title={'Appointment'} path={'appointment'} stickyHeader={false}>
        <P>Please message me briefly about your child’s problems, what treatment he/she has received and what you expect
            from the consultation. I will be able to decide whether your child would benefit from Homeopathy or not and
            then I will offer your child possible appointment dates / times.
        </P>
        <P>Use the contact form below to reach out to me.</P>
        <form style={{display: 'flex', flexDirection: 'column', padding: '1rem 0rem'}} onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const trigger = triggeredButtonRef.current;
            const form = e.currentTarget as HTMLFormElement;

            const getValue = (key: string): string => {
                const element = form.elements.namedItem(key);
                if (element instanceof HTMLInputElement) {
                    return element.value;
                }
                if (element instanceof HTMLTextAreaElement) {
                    return element.value;
                }
                return '';

            };

            const customer: Customer = {
                name: getValue('name'),
                childDoB: getValue('childDob'),
                childName: getValue('childName'),
                email: getValue('email'),
                message: getValue('message'),
                phone: getValue('phone')
            }

            if (trigger === 'email') {
                sendEmail(customer)
            }
            if (trigger === 'sms') {
                sendSms(customer)
            }
            if (trigger === 'phone') {
                sendWhatsApp(customer)
            }
            return false;
        }} action={'#'} id={`${id}-form`}>
            <Input name={'name'} required={true} style={{marginBottom: '1rem'}} title={'Name'}
                   placeholder={'Enter your name'}/>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Input name={'email'} required={true} type={'email'} inputMode={"email"}
                       containerStyle={{flexGrow: 1, marginBottom: '1rem', marginRight: '1rem'}} title={'Email'}
                       placeholder={'Enter your email'}/>
                <Input name={'phone'} required={true} type={'tel'} inputMode={'tel'}
                       containerStyle={{flexGrow: 1, marginBottom: '1rem'}} title={'Phone'}
                       placeholder={'Enter your phone number'}/>
            </div>
            <Input name={'childName'} required={true} type={'text'} inputMode={'text'} style={{marginBottom: '1rem'}}
                   title={'Child Name'} placeholder={'Enter the child\'s name'}/>
            <Input name={'childDob'} required={true} type={'date'} inputMode={'text'} style={{marginBottom: '1rem'}}
                   title={'Child Date of Birth'} placeholder={'Select a date'}/>
            <TextArea name={'message'} required={true} inputMode={'text'}
                      style={{marginBottom: '1rem', height: '10rem'}} title={'Message'}
                      placeholder={'What is ailing your child ?'}/>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Button style={{marginRight: '1rem'}} onClick={() => triggeredButtonRef.current = 'email'}>Email</Button>
                <Button onClick={() => triggeredButtonRef.current = 'sms'}>SMS</Button>
                <Button style={{marginLeft: '1rem'}} onClick={() => triggeredButtonRef.current = 'phone'}>Whats App</Button>
            </div>

        </form>
    </Page>
}

function calculateAge(dob: Date) {
    const today = new Date();
    const yearDiff = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    let age: number | string;

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age = yearDiff - 1;
    } else {
        age = yearDiff;
    }

    if (age === 0) {
        const monthCount = (today.getFullYear() - dob.getFullYear()) * 12 + today.getMonth() - dob.getMonth();
        age = monthCount.toString() + ' month';
    } else if (age === 1) {
        age = age.toString() + ' year';
    } else {
        age = age.toString() + ' years';
    }
    return age;
}