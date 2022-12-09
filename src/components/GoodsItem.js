import React, { PureComponent } from "react";
import "../styles.css";
import { addGoodToCart } from "../redux/action";
import { connect } from "react-redux";


class GoodsItem extends PureComponent {
  
  render() {
    const { title, description, price, id } = this.props;

    return (
      <div className="goods-item" key={id}>
        <h3 className="goods-item__title">{title}</h3>
        <p className="goods-item__price">
          <span className="goods-item__price-value goods-item__price-value_old">{price*1.2}.00$ </span>
          <span className="goods-item__price-value goods-item__price-value_new">{price}.00$</span>
        </p>
        <p className="goods-item__description">{description}</p>
        <button onClick={() => this.props.addGoodToCart(id)} className="goods-item__add-to-card">Add to cart</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addGoodToCart: (id) => dispatch(addGoodToCart(id))
});

export default connect(null,mapDispatchToProps)(GoodsItem);