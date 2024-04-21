import { Formik, Form, Field, ErrorMessage } from "formik";
import { v4 as uuidv4 } from "uuid";
import style from "./contactForm.module.scss";
import * as Yup from "yup";

const TourChema = Yup.object().shape({
  name: Yup.string().trim().min(3).max(50).required(),
  number: Yup.string().trim().min(3).max(50).required(),
});

const ContactForm = ({ addContacts }) => {
  const nameFieldId = uuidv4();
  const phoneFieldId = uuidv4();
  const buttonFieldId = uuidv4();

  const handleSubmit = (values, actions ) => {
    const { name, number } = values;
    addContacts({
      // ...values,
      id: uuidv4(),
      name, //values.name.trim(),
      number, //values.name.trim(),
    });
    // onAddTour(nextSubmit); 
    console.log("Contact added:", { name, number });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={TourChema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <label htmlFor={nameFieldId}>Name</label>

        <Field type="text" name="name" id={nameFieldId} placeholder="Name..."/>

        <ErrorMessage name="name" component={"p"} style={{ color: "red" }} />

        <label htmlFor={phoneFieldId}>Number</label>

        <Field type="tel" name="number" id={phoneFieldId} placeholder="Number..."/>

        <ErrorMessage name="number" component={"p"} style={{ color: "red" }} />

        <button type="submit" id={buttonFieldId}>
        Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
