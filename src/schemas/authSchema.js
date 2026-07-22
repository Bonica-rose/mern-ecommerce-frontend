import * as yup from "yup";

export const loginSchema=yup.object({

    email:yup
        .string()
        .email()
        .required('Email is required'),

    password:yup
        .string()
        .required('Password is required')

});

export const registerSchema=yup.object({

    name:yup
        .string()
        .required('Name is required'),

    email:yup
        .string()
        .email()
        .required('Email is required'),

    password:yup
        .string()
        .min(6)
        .required('Password is required'),

    confirmPassword:yup
        .string()
        .oneOf([yup.ref("password")],"Passwords must match")
        .required('Confirm Password is required')

});