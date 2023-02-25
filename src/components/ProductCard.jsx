import React from 'react'
import PropTypes from 'prop-types';

const ProductCard = (props) => {
    return (
        <div className={props.className}>
            {/* Product image*/}
            <img
                className="card-img-top"
                src={props.url}
                alt="..."
            />
            {/* Product details*/}
            <div className="card-body p-4">
                <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">{props.title}</h5>
                    {/* Product price*/}
                    {props.price}
                </div>
            </div>
            {/* Product actions*/}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" href="#">
                        View options
                    </a>
                </div>
            </div>
        </div>
    )
}

ProductCard.defaultProps = {
    title: "Lorem Ipsum",
    price: "$0 - $10",
    url: "https://picsum.photos/450/300",
    className: "card h-100 shadow"
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    url: PropTypes.string,
    className: PropTypes.string.isRequired
}

export default ProductCard