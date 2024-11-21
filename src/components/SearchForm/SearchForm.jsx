import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './SearchForm.module.css'


const SearchForm = ({ onSubmit, initialQuery = '' }) => {
  const validationSchema = Yup.object().shape({
    query: Yup.string().trim().required('The search field cannot be empty!'),
  });

  return (
    <Formik
      initialValues={{ query: initialQuery }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values.query);
        resetForm();
      }}
    >
      {() => (
        <Form>
          <Field className={css.fieldInput} name="query" placeholder="Search for a movie..." />
          <ErrorMessage name="query" component="div" style={{ color: 'red' }} />
          <button type="submit">Search</button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;