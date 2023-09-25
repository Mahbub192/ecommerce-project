import { useEffect, useState, useRef } from "react";
import Product from "./Product";

import Image from "next/image";
import { useRouter } from "next/router";
import PaginationControls from "../componants/PaginationControls";

const ProductPage = () => {
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const productSectionRef = useRef(null);

  const router = useRouter();
  const searchParams = new URLSearchParams(router.asPath.split("?")[1]);

  const page = Number(searchParams.get("page")) || 1;
  const per_page = Number(searchParams.get("per_page")) || 12;

  const start = (page - 1) * per_page;
  const end = start + per_page;

  const fetchProducts = () => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.slice(start, end));
        setTotalPages(Math.ceil(data.length / per_page));
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [page, per_page]);

  const scrollToProductSection = () => {
    window.scrollTo(0, 1500);
  };

  return (
    <div>
      <div ref={productSectionRef}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-4">
            {items.map((p) => (
              <Product key={p.id} product={p}></Product>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      <PaginationControls
        hasNextPage={page < totalPages}
        hasPrevPage={page > 1}
        currentPage={page}
        totalPages={totalPages}
        perPage={per_page}
        onNextPage={scrollToProductSection} // Scroll to the product section
        onPrevPage={scrollToProductSection} // Scroll to the product section
      />
    </div>
  );
};

export default ProductPage;
