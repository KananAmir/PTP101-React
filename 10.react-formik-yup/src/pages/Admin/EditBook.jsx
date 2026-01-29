import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";

import { editBookById, getBookById } from "../../services/bookService";
import Loading from "../../components/Loading";
import { AddBookSchema } from "../../validation/bookValidation";

function EditBook() {
  const [book, setBook] = useState(null);

  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    const getBookInfo = async () => {
      try {
        const res = await getBookById(id);
        setBook(res.data);
      } catch (error) {
        console.log(error?.message);
        toast.error("Kitab məlumatı yüklənmədi.");
      }
    };

    if (id) getBookInfo();
  }, [id]);

  if (!book) return <Loading />;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Admin Edit Book Page
      </h2>

      <Formik
        enableReinitialize
        initialValues={{
          title: book.title || "",
          author: book.author || "",
          price: book.price ?? "", // number boş gələrsə "" saxla
          coverImageURL: book.coverImageURL || "",
          description: book.description || "",
        }}
        validationSchema={AddBookSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            // price string gələ bilər -> number-a çevir
            const payload = {
              ...values,
              price: values.price === "" ? 0 : Number(values.price),
            };

            await editBookById(id, payload);

            toast.success("Book edited successfully!", { duration: 2000 });

            setTimeout(() => {
              nav(-1);
            }, 2000);
          } catch (error) {
            console.log(error?.message);
            toast.error("Xəta baş verdi. Yenidən yoxla.");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className="bg-white shadow rounded-lg p-6 space-y-4">
            <div>
              <Field
                type="text"
                name="title"
                placeholder="title"
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  touched.title && errors.title ? "border-red-400" : "border-gray-300"
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
                placeholder="author"
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  touched.author && errors.author ? "border-red-400" : "border-gray-300"
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
                placeholder="price"
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  touched.price && errors.price ? "border-red-400" : "border-gray-300"
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
                placeholder="coverImageURL"
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
                placeholder="description"
                rows={4}
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${
                  touched.description && errors.description
                    ? "border-red-400"
                    : "border-gray-300"
                }`}
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
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition font-medium disabled:opacity-60"
            >
              {isSubmitting ? "Editing..." : "Edit Book"}
            </button>
          </Form>
        )}
      </Formik>

      <Toaster />
    </div>
  );
}

export default EditBook;
