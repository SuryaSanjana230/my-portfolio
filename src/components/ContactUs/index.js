import React from 'react';
import { Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  Name: yup.string().required('Name is required'),
  Email: yup.string().email('Invalid email format').required('Email is required'),
  PhoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone Number must be a number')
    .length(10, 'Phone Number must be exactly 10 digits')
    .required('Phone Number is required'),
  Subject: yup.string().required('Subject is required'),
  Message: yup.string().required('Message is required'),
});

export const ContactUs = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const { TextArea } = Input;
  return (
    <>

      <p className="centercontainer"><b>Contact Me</b></p>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6" id="antdleft">
            <p className="contactustext1">
            "If you have any questions or would like to know more about my work, feel free to reach out! You can contact me through the details provided below, or simply fill out the inquiry form, and I’ll get back to you as soon as possible. I'm excited to connect and assist you!"
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group" >
                <label>Name</label>
                <Controller
                  control={control}
                  name="Name"
                  render={({ field }) => <Input {...field} />}
                />
                {errors.Name && <p className="error">{errors.Name.message}</p>}
              </div>
              <div className="form-group">
                <label>Email</label>
                <Controller
                  control={control}
                  name="Email"
                  render={({ field }) => <Input {...field} />}
                />
                {errors.Email && <p className="error">{errors.Email.message}</p>}
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <Controller
                  control={control}
                  name="PhoneNumber"
                  render={({ field }) => <Input {...field} />}
                />
                {errors.PhoneNumber && <p className="error">{errors.PhoneNumber.message}</p>}
              </div>
              <div className="form-group">
                <label>Subject</label>
                <Controller
                  control={control}
                  name="Subject"
                  render={({ field }) => <Input {...field} />}
                />
                {errors.Subject && <p className="error">{errors.Subject.message}</p>}
              </div>
              <div className="form-group">
                <label>Message</label>
                <Controller
                  control={control}
                  name="Message"
                  render={({ field }) => <TextArea rows={4} {...field} />}
                />
                {errors.Message && <p className="error">{errors.Message.message}</p>}
              </div>
              <button type="submit" className="contactbutton">Submit</button>
            </form>
          </div>
</div>
          
   </div>
  
    </>
  );
};
