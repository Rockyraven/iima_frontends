import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { toast } from 'react-toastify';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
      agree: false,
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastname: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      phone: Yup.string()
        .matches(/^[0-9]+$/, 'Must be a number')
        .min(10, 'Must be at least 10 digits')
        .required('Required'),
      message: Yup.string()
        .required('Required'),
      agree: Yup.bool()
        .oneOf([true], 'You must accept the terms and conditions')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      setContactData(values);
    },
  });

  const setContactData = async (values) => {
    try {
      const res = await axios.post("https://iima-backend-1.onrender.com/user/createdata", values);
      console.log(res);  
      toast.success("Data saved successfully")  
    } catch (error) {
      console.log(error);
      toast.error("Some went wrong")  
    }
  }

  console.log(formik); 

  return (
    <div className="lg:px-12 px-4">
      <div className="mb-20 text-center">
        <p className="text-xl text-headingcolor font-semibold mb-5">
          Get In Touch
        </p>
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
          Contact me
        </h2>
      </div>
      <div className="md:w-2/3 mx-auto mb-20">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="firstname"
                className="text-base text-headingcolor w-full"
              >
                First name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="block border border-primary rounded-lg py-2 mt-2 w-full"
                {...formik.getFieldProps('firstname')}
              />
              {formik.touched.firstname && formik.errors.firstname ? (
                <div className="text-red-500 text-sm">{formik.errors.firstname}</div>
              ) : null}
            </div>
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="lastname"
                className="text-base text-headingcolor w-full"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="block border border-primary rounded-lg py-2 mt-2 w-full"
                {...formik.getFieldProps('lastname')}
              />
              {formik.touched.lastname && formik.errors.lastname ? (
                <div className="text-red-500 text-sm">{formik.errors.lastname}</div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="email"
                className="text-base text-headingcolor w-full"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block border border-primary rounded-lg py-2 mt-2 w-full"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="phone"
                className="text-base text-headingcolor w-full"
              >
                Phone number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="block border border-primary rounded-lg py-2 mt-2 w-full"
                {...formik.getFieldProps('phone')}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 text-sm">{formik.errors.phone}</div>
              ) : null}
            </div>
          </div>
          <div className="w-full mb-8">
            <label
              htmlFor="message"
              className="text-base text-headingcolor w-full"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full"
              {...formik.getFieldProps('message')}
            >
            </textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-sm">{formik.errors.message}</div>
            ) : null}
          </div>
          <div className="w-full mb-8">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              {...formik.getFieldProps('agree')}
            />
            <label
              htmlFor="agree"
              className="text-base text-headingcolor w-full ml-3"
            >
              I accept the terms
            </label>
            {formik.touched.agree && formik.errors.agree ? (
              <div className="text-red-500 text-sm">{formik.errors.agree}</div>
            ) : null}
          </div>
          <div className="w-36 mx-auto border rounded-lg">
            <input
              type="submit"
              value="Submit"
              className="btn-primary py-3 bg-primary px-8 text-white font-medium rounded-b-md cursor-pointer inline-block w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
