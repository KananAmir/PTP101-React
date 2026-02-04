import { Formik, Form, Field, ErrorMessage } from "formik";
import { addNewBook } from "../../services/bookService";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AddBookSchema } from "../../validation/bookValidation";
import { useTranslation } from "react-i18next";

function AddBook() {
  const nav = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        {t("admin.addBook.pageTitle")}
      </h2>

      <Formik
        initialValues={{
          title: "",
          author: "",
          price: "",
          coverImageURL: "",
          description: "",
        }}
        validationSchema={AddBookSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await addNewBook(values);
            resetForm();

            toast.success(t("admin.addBook.toast.success"));

            setTimeout(() => {
              nav("/admin/books");
            }, 1500);
          } catch (error) {
            toast.error(t("admin.addBook.toast.error"));
            console.log(error?.message);
          }
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className="bg-white shadow rounded-lg p-6 space-y-4">
            <div>
              <Field
                type="text"
                name="title"
                placeholder={t("admin.addBook.form.title.placeholder")}
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  touched.title && errors.title
                    ? "border-red-400"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                type="text"
                name="author"
                placeholder={t("admin.addBook.form.author.placeholder")}
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  touched.author && errors.author
                    ? "border-red-400"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="author"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                type="number"
                name="price"
                placeholder={t("admin.addBook.form.price.placeholder")}
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  touched.price && errors.price
                    ? "border-red-400"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                type="text"
                name="coverImageURL"
                placeholder={t(
                  "admin.addBook.form.coverImageURL.placeholder"
                )}
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  touched.coverImageURL && errors.coverImageURL
                    ? "border-red-400"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="coverImageURL"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                as="textarea"
                name="description"
                placeholder={t(
                  "admin.addBook.form.description.placeholder"
                )}
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${
                  touched.description && errors.description
                    ? "border-red-400"
                    : "border-gray-300"
                }`}
                rows={4}
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition font-medium disabled:opacity-60"
            >
              {isSubmitting
                ? t("admin.addBook.buttons.adding")
                : t("admin.addBook.buttons.add")}
            </button>
          </Form>
        )}
      </Formik>

      <Toaster />
    </div>
  );
}

export default AddBook;
