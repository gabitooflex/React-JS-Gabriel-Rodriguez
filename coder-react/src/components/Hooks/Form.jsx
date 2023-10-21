import React, { useState } from "react"
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, formState:{ errors }, watch, handleSubmit, reset } = useForm();

    const [isSubmitted, setIsSubmitted] = useState(false);
 
    const onSubmit = (data) => {
        console.log(data);
        setIsSubmitted(true);
        reset();
    }

    return(
        <div style={{marginLeft:"280px", marginRight:"280px"}}>
            <h2 style={{marginTop:"10px"}} className="centrar">CONTACTATE CON NOSOTROS</h2>
            {isSubmitted ? (
        <p style={{ color: "green", marginTop: "10px" }}> Su mensaje fue enviado, le responderemos lo antes posible!</p>) 
        : (<p style={{ marginTop: "10px" }} className="centrar"> Escriba sus datos {watch("nombre")} </p> )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group">
                    <label>Nombre</label>
                    <input class="form-control form-control-lg" placeholder="Escriba su nombre" type="text" {...register('nombre',{
                        required: true,
                        maxLength: 15,
                    })} />
                    {errors.nombre?.type === 'required' && <p>Debe llenar el campo</p>}
                    {errors.nombre?.type === 'maxLength' && <p>Debe tener menos de 15 caracteres</p>}
                </div>
                <div>
                    <label>Apellido</label>
                    <input class="form-control form-control-lg" placeholder="Escriba su apellido" type="text"  {...register('apellido',{
                        required: true,
                        maxLength: 15
                    })} />
                    {errors.apellido?.type === 'required' && <p>Debe llenar el campo</p>}
                    {errors.apellido?.type === 'maxLength' && <p>Debe tener menos de 15 caracteres</p>}
                </div>
                <div>
                    <label for="exampleInputEmail1">Email</label>
                    <input  class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escriba su email" type="text"  {...register('email',{
                         required: true,
                         pattern:/\S+@\S+\.\S+/
                    })} />
                    {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Escriba aquí su mensaje</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" {...register('mensaje',{
                        required: true,
                        maxLength: 100,
                    })}/>
                    {errors.mensaje?.type === 'required' && <p>Debe llenar el campo</p>}
                    {errors.mensaje?.type === 'maxLength' && <p>Debe tener menos de 100 caracteres</p>}
                </div>
                <button style={{marginBottom:"60px"}} type="submit" class="btn btn-dark mt-3">Enviar</button>
            </form>
        </div>
    )
}

export default Form