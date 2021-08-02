import { Formik, Field } from 'formik';
import { StyledForm } from './styles';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';
import FormField from '../FormField';
import FormError from '../FormError';
import FormSubmitButton from '../FormSubmitButton';
import * as Yup from 'yup';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    eventDate: string;
}

type FormProps = { handleSubmit: () => Promise<void>};

const initialValues: FormValues = { firstName: '', lastName: '', email: '', eventDate: ''};
async function postForm(values: FormValues) {
    await fetch(`${process.env.API_URL}/event`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
        method: 'POST'
    });
}

const Form = ({handleSubmit}: FormProps ) => {
    return (
    <Formik
        initialValues = {initialValues}
        validationSchema={
            Yup.object({
                firstName: Yup.string().required().min(2, 'Must be 2 characters or more').matches(/^[\p{L}]+$/u, "Only letters available"),
                lastName: Yup.string().required().min(2, 'Must be 2 characters or more').matches(/^[\p{L}]+$/u, "Only letters available"),
                email: Yup.string().email('Invalid email address').required(),
                eventDate: Yup.string().required()
        })}
        onSubmit={async (values:FormValues, { setSubmitting, resetForm }) => {
            await postForm(values);
            await handleSubmit();
            setSubmitting(false);
            resetForm({values: initialValues});
        }}
    >
        {({ isSubmitting, isValid, dirty, validateField, setTouched, touched }) => {
            const onFocus = (inputName: string) => {
                validateField(inputName); 
                setTouched({...touched, [inputName]:true});
            }
          return (
            <StyledForm>
                <FormGroup name="First Name">
                    <FormLabel htmlFor="firstName"/>
                    <Field as={FormField} name="firstName" type="text" placeholder="First Name" onFocus={() => onFocus('firstName')} required minLength={2} pattern="^[\p{L}]+$"/>
                    <FormError name="firstName" />
                </FormGroup>
    
                <FormGroup name="Last Name">
                    <FormLabel htmlFor="lastName"/>
                    <Field as={FormField} name="lastName" type="text" placeholder="Last Name" onFocus={() => onFocus('lastName')} required minLength={2} pattern="^[\p{L}]+$"/>
                    <FormError name="lastName" />
                </FormGroup>
    
                <FormGroup name="Email Address">
                    <FormLabel htmlFor="email"/>
                    <Field as={FormField} name="email" type="email" placeholder="eMail" onFocus={() => onFocus('email')} pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
                    <FormError name="email" />
                </FormGroup>
    
                <FormGroup name="Event Date">
                    <FormLabel htmlFor="eventDate"/>
                    <Field as={FormField} name="eventDate" type="datetime-local" onFocus={() => onFocus('eventDate')} placeholder="dd.MM.y, HH:mm"/>
                    <FormError name="eventDate"/>
                </FormGroup>
    
                <FormSubmitButton disabled={isSubmitting || !(isValid && dirty)}>Submit</FormSubmitButton>
            </StyledForm>
          );  
        }}
    </Formik>
    );
}

export default Form;