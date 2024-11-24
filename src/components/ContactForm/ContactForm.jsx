import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Required"),
  number: Yup.string()
    .min(3, "Number must be at least 3 characters")
    .max(50, "Number must be at most 50 characters")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();

  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    actions.resetForm();
    dispatch(addContact(newContact));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={css.Form}>
        <div className={css.field}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" placeholder="Name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.field}>
          <label htmlFor={numberId}>Number</label>
          <Field type="text" name="number" placeholder="Number" id={numberId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
