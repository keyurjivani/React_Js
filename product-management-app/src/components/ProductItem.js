import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/actions/productActions';

const ProductItem = ({ product, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(product.id));
    }
  };

  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p>${product.price}</p>
        <p className="text-muted">{product.category}</p>
        <button className="btn btn-sm btn-primary me-2" onClick={() => onEdit(product)}>Edit</button>
        <button className="btn btn-sm btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
export default ProductItem;
