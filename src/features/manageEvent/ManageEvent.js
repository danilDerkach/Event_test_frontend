import React, {useMemo} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Input, Grid, TextField} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
    eventName: yup.string().required(),
    location: yup.string().required(),
    startDate: yup.date().required(),
    endDate: yup.date().required(),
}).required();

const ManageEvent = () => {
    const navigate = useNavigate();
    const {control, handleSubmit, setValue} = useForm({
        resolver: yupResolver(schema),
    });

    const events = useMemo(() => JSON.parse(localStorage.getItem('events')) || [], []);

    const onSubmit = (data) => {
        data.submittedAt = new Date();
        events.push(data);
        localStorage.setItem("events", JSON.stringify(events));
        navigate("/")
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction={"column"} style={{width: 400}} >
                <Controller
                    name="eventName"
                    control={control}
                    defaultValue={''}
                    render={({field}) => <Input {...field} />}
                />
                <Controller
                    name="location"
                    control={control}
                    defaultValue={''}
                    render={({field}) => <Input {...field} />}
                />
                <Controller
                    name="startDate"
                    control={control}
                    defaultValue={new Date()}
                    render={({field}) => <TextField type="date" {...field} />}
                />
                <Controller
                    name="endDate"
                    control={control}
                    pattern={"yyyy-MM-dd"}
                    defaultValue={new Date()}
                    render={({field}) => <TextField type="date"  {...field} />}
                />
                <input type="submit"/>
            </Grid>
        </form>
    );
};

export default ManageEvent;
