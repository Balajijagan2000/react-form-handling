
import './App.css';
import {useForm} from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
function App() {

  //Schema of the form data (this is how a form looks like )
  const schema = yup.object().shape(
    {
      fullname: yup.string().matches(/^[aA-zZ\s]+$/, "Please enter valid name").required('Please enter full name'),
      email: yup.string().email('Please enter valid email').required(),
      age: yup.number("Provide valid age").integer("Provide valid age").positive("Provide valid age").min(13,"Provide valid age").required("Provide valid age"),
      password: yup.string().min(4,"Password must be min 4 chars").max(12,"Password must be max 12 chars").required(),
      confirm_password: yup.string().oneOf([yup.ref("password"),null],"Password doesn't match").required("Password doesn't match"),

    }
  )
  //handleSubmit function is to handle form submission
  //register is used to handle the states of all inputs
  const onSubmit = (formData) => {
    alert('Form Submitted Successfully')
  }
  const {register,handleSubmit, formState:{errors} } = useForm(
    {
      resolver: yupResolver(schema)
    }
  )
    
  
  return (
    <div className="App">
      <h2>React Form Handling</h2>
      <h2>Using React Hook Form and Yup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="fullname">Fullname</label>
        <input type="text" id="fullname" placeholder="eg: John David" {...register("fullname")} />
        {errors.fullname && <p>{errors.fullname.message}</p>}

        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="eg: name@yahoo.com" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="age">Age</label>
        <input type="number" id="age" placeholder="eg: 19" {...register("age")} />
        {errors.age && <p>{errors.age.message}</p>}


        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="eg: password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}

        <label htmlFor="cnfrmpassword">Confirm Password</label>
        <input type="password" id="cnfrmpassword" placeholder="eg: confirm password" {...register("confirm_password")} />
        {errors.confirm_password && <p>{errors.confirm_password.message}</p>}

       


        <input type="submit" />

      </form>
    </div>
  );
}

export default App;
