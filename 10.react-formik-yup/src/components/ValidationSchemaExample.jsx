import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .matches(
            /^(?=.*[A-Z])(?=.*\d).{8,}$/,
            "Password ən az 8 simvol, 1 böyük hərf və 1 rəqəm içərməlidir"
        )
        .required("Password mütləqdir")
});

export const ValidationSchemaExample = () => (
    <div>
        <h1>Signup</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    {console.log(touched)}
                    <div>
                        <Field name="firstName" className='border border-grey-500' placeholder="First Name" />
                        {errors.firstName && touched.firstName && (
                            <div className='text-red-500'>{errors.firstName}</div>
                        )}
                    </div>
                    <div>
                        <Field name="lastName" className='border border-grey-500' placeholder="Last Name" />
                        {errors.lastName && touched.lastName && (
                            <div className='text-red-500'>{errors.lastName}</div>
                        )}
                    </div>
                    <div>
                        <Field name="email" type="email" className='border border-grey-500' placeholder="Email" />
                        {errors.email && touched.email && (
                            <div className='text-red-500'>{errors.email}</div>
                        )}
                    </div>
                    <div>
                        <Field name="password" type="password" className='border border-grey-500' placeholder="Password" />
                        {errors.password && touched.password && (
                            <div className='text-red-500'>{errors.password}</div>
                        )}
                    </div>
                    <div>
                        <button className='border border-amber-700 bg-amber-500 text-white px-4 py-2 rounded' type="submit">Submit</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);