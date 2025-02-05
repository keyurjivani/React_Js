import React from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import "./UseForm.css";

// Define the validation schema for the form
const validations=z.object({
    name:z.string().min(2,"Minimum 2 Chrachter is Required..").max(25),
    email:z.string().email("Invalid Email"),
    password:z.string().min(6,"Minimum 6 Chrachter is Required..").max(20)
    .regex(/[a-z]/,"At least one small character is required")
    .regex(/[A-Z]/,"At least one capital character is required")
    .regex(/[0-9]/,"At least one number is required")
    .regex(/[!@#$%^&*_+=]/,"At least one special character is required"),
});

const FormValidation = () => {
    const {register,watch,handleSubmit,formState:{errors}}=useForm({
        resolver:zodResolver(validations),
        mode:"onChange",
    });

    const onSubmit=(data)=>{
        console.log(data);
    };
    watch();

    const value=watch();

    const box=(name)=>{
        if(errors[name]){
            return "2px solid red"
        }else if(value && !errors[name]){
            return "2px solid green"
        }else{
            return "2px solid black"
        }
    };

    return(
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='name'>Enter User Name</label>
                    <input type='text' id='name' style={{border:box("name")}} {...register("name")}></input>
                    {errors.name && <span>{errors.name.message}</span>}
                    <br/><br/>
                    <label htmlFor='email'>Enter User Email</label>
                    <input type='email' id='email' style={{border:box("email")}} {...register("email")} ></input>
                    {errors.email && <span>{errors.email.message}</span>}
                    <br/><br/>
                    <label htmlFor='password'>Enter User Password</label>
                    <input type='password' id='password' style={{border:box("password")}} {...register("password")}></input>
                    {errors.password && <span>{errors.password.message}</span>}
                    <br/><br/>
                    <button type='submi'>Submit</button>
                </form>
            </div>
        </>
  );
};

export default FormValidation;