import Link from "next/link";
import { useRouter } from "next/router";

const PaginationControls = ({ hasNextPage, hasPrevPage, currentPage, totalPages, perPage,onNextPage ,onPrevPage}) => {
  const router = useRouter();

  return (
    <div className="flex gap-2">
      {hasPrevPage && (
        <Link onClick={onPrevPage()}  href={`/?page=${currentPage - 1}&per_page=${perPage}`}>
          <p className="text-gray-500 p-1">{"<<"}</p>
        </Link>
      )}

      <div className="pt-1">
        {currentPage} / {totalPages}
      </div>

      {hasNextPage && (
        <Link onClick={onNextPage()} href={`/?page=${currentPage + 1}&per_page=${perPage}`}>
          <p className="text-gray-500 p-1">{">>"}</p>
        </Link>
      )}
    </div>
  );
};

export default PaginationControls;
