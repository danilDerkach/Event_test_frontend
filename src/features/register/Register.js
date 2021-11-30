import React from 'react';
import RegisterForm from "./RegisterForm";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    eventName: yup.string().required(),
    location: yup.string().required(),
    startDate: yup.date().required(),
    endDate: yup.date().required(),
}).required();

const Register = () => {
    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        //TODO: send query on backend
    };

    return (
        <RegisterForm control={control} handleSubmit={handleSubmit(onSubmit)} errors={errors}/>
    )
};

export default Register;