import Image from 'next/image';
import Link from 'next/link';
import styles from '../../ui/dashboard/products/products.module.css';
import Search from '../../ui/dashboard/search/search';
import Pagination from '../../ui/dashboard/pagnination/pagination';

const ProductsPage = () => {
  const count = 1;
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}> Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                iPhone
              </div>
            </td>

            <td>Desc</td>
            <td>$999</td>
            <td>Dec 28th 2023</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/users/`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.delete} ${styles.view}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};
export default ProductsPage;
