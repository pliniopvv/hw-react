import { Button } from 'bootstrap';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

function FormTextExample() {

  const { register, handleSubmit } = useForm();

  return (
    <>
    <Form>
      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          {...register('password')}
        />
        <Form.Text className='text-dark-emphasis' id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and numbers,
          and must not contain spaces, special characters, or emoji.
        </Form.Text>
    </Form>
    </>
  );
}

export default FormTextExample;