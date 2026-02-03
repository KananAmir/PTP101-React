import { Formik, Form, Field, ErrorMessage } from "formik";
import { addNewBook } from "../../services/bookService";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AddBookSchema } from "../../validation/bookValidation";


function AddBook() {
  const nav = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Admin Add Book Page
      </h2>

      <Formik
        initialValues={{
          title: "",
          author: "",
          price: "", // number input üçün string saxlamaq rahatdır
          coverImageURL: "",
          description: "",
        }}
        validationSchema={AddBookSchema}
        onSubmit={async (values, { resetForm }) => {
          try {

            await addNewBook(values);
            resetForm();

            toast.success("Book Added Successfully!");

            setTimeout(() => {
              nav("/admin/books");
            }, 1500);
          } catch (error) {
            toast.error("Xəta baş verdi. Yenidən yoxla.");
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
                placeholder="title"
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${touched.title && errors.title ? "border-red-400" : "border-gray-300"
                  }`}
              />
              {/* {errors.title && touched.title && (
              <div className="text-red-500 text-sm mt-1">{errors.title}</div>
            )} */}
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
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${touched.author && errors.author ? "border-red-400" : "border-gray-300"
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
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${touched.price && errors.price ? "border-red-400" : "border-gray-300"
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
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${touched.coverImageURL && errors.coverImageURL ? "border-red-400" : "border-gray-300"
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
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${touched.description && errors.description ? "border-red-400" : "border-gray-300"
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
              {isSubmitting ? "Adding..." : "Add Book"}
            </button>
          </Form>
        )}
      </Formik>

      <Toaster />
    </div>
  );
}

export default AddBook;
