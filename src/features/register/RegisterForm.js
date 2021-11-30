import React from "react";
import {Grid, TextField} from "@material-ui/core";
import {Controller} from "react-hook-form";

const RegisterForm = ({ control, handleSubmit, errors }) => {

    return (
        <form onSubmit={handleSubmit}>
            <Grid container direction={"column"} style={{width: 400}} >
                <Controller
                    name="username"
                    floatingLabelText="user name"
                    defaultValue={''}
                    control={control}
                    render={({field}) => <TextField errors={errors[field.name]} {...field} />}
                />
                <Controller
                    name="email"
                    floatingLabelText="email"
                    control={control}
                    defaultValue={''}
                    render={({field}) => <TextField errors={errors[field.name]} {...field} />}
                />
                <Controller
                    type="password"
                    name="password"
                    floatingLabelText="password"
                    control={control}
                    defaultValue={''}
                    render={({field}) => <TextField errors={errors[field.name]} {...field} />}
                />
                <Controller
                    type="password"
                    name="repeatPassword"
                    floatingLabelText="password"
                    control={control}
                    defaultValue={''}
                    render={({field}) => <TextField errors={errors[field.name]} {...field} />}
                />
                <input type="submit"/>
            </Grid>
        </form>
    );
};

export default RegisterForm;
