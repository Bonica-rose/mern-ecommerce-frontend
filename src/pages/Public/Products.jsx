import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import FilterBar from "../../components/filters/FilterBar";

import {
  setSearch,
  setCategory,
  setSort,
  setPage,
} from "../../features/products/productSlice";

import {
  getProducts,
  getProductCategories,
} from "../../features/products/productThunks";

import ProductGrid from "../../components/product/ProductGrid";

import Loading from "../../components/common/Loading";
import EmptyState from "../../components/common/EmptyState";
import Pagination from "../../components/common/Pagination";
import ErrorMessage from "../../components/common/ErrorMessage";

const Products = () => {
  const dispatch = useDispatch();

  const { products, categories, filters, loading, error, total, page, pages } =
    useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts(filters));
  }, [dispatch, filters]);

    useEffect(() => {
      dispatch(getProductCategories());
    }, [dispatch]);

  return (
    <div className="container mx-auto py-8">
      <FilterBar
        search={filters.search}
        category={filters.category}
        sort={filters.sort}
        categories={categories}
        onSearch={(value) => dispatch(setSearch(value))}
        onCategory={(value) => dispatch(setCategory(value))}
        onSort={(value) => dispatch(setSort(value))}
      />

      {loading && <Loading />}

      {!loading && error && <ErrorMessage message={error} />}

      {!loading && !error && products.length === 0 && (
        <EmptyState
          title="No Products Found"
          message="Try another search or filter."
        />
      )}

      {!loading && !error && products.length > 0 && (
        <ProductGrid products={products} />
      )}

      {!loading && !error && products.length > 0 && (
        <Pagination page={page} pages={pages} onPageChange={setPage} />
      )}
    </div>
  );
}

export default Products;
