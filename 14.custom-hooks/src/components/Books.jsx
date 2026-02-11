import { useFetch } from "../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "motion/react"; // <-- Motion import
import "./books.css";

const Books = () => {
    const { data: books, loading, error } = useFetch(
        "https://ptp101-products-api.vercel.app/books"
    );

    if (loading) return <p className="status">Loading...</p>;
    if (error) return <p className="status error">{error}</p>;
    if (!books?.length) return <p className="status">No books found</p>;

    // 🔥 Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="books-container"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <h2 className="section-title">📚 Book Collection</h2>

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    576: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 20 },
                }}
            >
                {books.map((book) => (
                    <SwiperSlide key={book.id}>
                        <motion.div
                            className="book-card"
                            variants={cardVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <div className="image-wrapper">
                                <img src={book.coverImageURL} alt={book.title} />
                            </div>

                            <div className="book-info">
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    );
};

export default Books;
