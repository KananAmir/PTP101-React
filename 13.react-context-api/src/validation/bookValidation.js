import * as Yup from "yup";

export const AddBookSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .min(2, "Title ən azı 2 simvol olmalıdır")
    .max(100, "Title çox uzundur")
    .required("Title mütləqdir"),
  author: Yup.string()
    .trim()
    .min(2, "Author ən azı 2 simvol olmalıdır")
    .max(80, "Author çox uzundur")
    .required("Author mütləqdir"),
  price: Yup.number()
    .typeError("Price rəqəm olmalıdır")
    .positive("Price 0-dan böyük olmalıdır")
    .required("Price mütləqdir"),
  coverImageURL: Yup.string()
    .trim()
    .url("CoverImageURL düzgün link olmalıdır (https://...)")
    .required("CoverImageURL mütləqdir"),
  description: Yup.string()
    .trim()
    .min(10, "Description ən azı 10 simvol olmalıdır")
    .required("Description mütləqdir"),
});
