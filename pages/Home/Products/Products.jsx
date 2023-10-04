import axios from "axios";
import { useEffect, useState } from "react";
import PaginationControls from "../../componants/PaginationControls";
import { paginate } from "../../utils/paginate";
import Product from "./Product";

const ProductPage = () => {
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(posts, currentPage, pageSize);

  return (
    <div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-4">
            {paginatedPosts.map((p) => (
              <Product key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      <PaginationControls
        itemsCount={posts.length} 
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductPage;
