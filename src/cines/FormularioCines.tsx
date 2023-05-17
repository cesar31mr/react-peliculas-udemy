import { Form, Formik, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../utils/Button';
import FormGroupText from '../utils/FormGroupText';
import MapaFormulario from '../utils/MapaFormulario';
import { cineCreacionDTO } from './cines.module';

export default function FormularioCines(props: formularioCinesProps) {
    return (
        <Formik
        initialValues={props.modelo}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
        })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText label='Nombre' campo='nombre'/>

                    <div style={{marginBottom: '1rem'}}>
                        <MapaFormulario campoLat='latitud' campoLng='longitud' />
                    </div>

                    <Button disabled={formikProps.isSubmitting} type='submit' >Guardar</Button>
                    <Link className='btn btn-secondary' to='/cines' >Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
};


interface formularioCinesProps{
    modelo: cineCreacionDTO;
    onSubmit(valores: cineCreacionDTO, acciones: FormikHelpers<cineCreacionDTO>): void
}