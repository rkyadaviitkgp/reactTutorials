import React, { Component } from 'react';

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

class SearchBar extends Component {

    render() {
        return (
            <form >
                <input type="text" placeholder="search ..." onChange={this.props.handelFilterTextChange} />
                <p>
                    <input type="checkbox" onChange={this.props.handelCheckBoxChange} />
                    {' '}
                    only show products in stock
                </p>
            </form>
        );
    }

}

class TableHeading extends Component {

    constructor(props) {
        super(props);
        this.handelSortOnName = this.handelSortOnName.bind(this);
        this.handleClickOnPrice = this.handleClickOnPrice.bind(this);
    }

    handelSortOnName() {
        this.props.handleClickOnName();
    }

    handleClickOnPrice() {
        this.props.handleClickOnPrice();
    }


    render() {
        return (
            <div>
                <tr  >
                    <th > Name <button onClick={this.handelSortOnName} > Sort </button></th>
                    <th > Price <button onClick={this.handleClickOnPrice} > Sort </button> </th>
                </tr>
            </div>
        );
    }
}



function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.name.toUpperCase();
    const bandB = b.name.toUpperCase();

    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    } else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison;

}

function compare1(a, b) {

    // Use toUpperCase() to ignore character casing
    const bandA = a.price.substring(1);
    const bandB = b.price.substring(1);
    return bandA - bandB;

}

class ProductTable extends Component {



    render() {

        var row = [];
        var lastCategory = null;
        var filterText = this.props.filterText;
        var productArray = this.props.product;

        if (this.props.sortOnName)
            productArray.sort(compare);
        if (this.props.sortOnPrice)
            productArray.sort(compare1);


        productArray.forEach((product) => {
            if (filterText == '' || product.name.includes(filterText)) {
                if (product.category !== lastCategory) {
                    row.push(<ProductTableCategoryRow category={product.category} key={product.category} />);
                }
                row.push(<ProductTableItemsRow product={product} key={product.name} inStockOnly={this.props.inStockOnly} />);
                lastCategory = product.category;
            }
        });
        return (
            <table>
                <tbody>
                    {row}
                </tbody>
            </table>
        );
    }
}

class ProductTableCategoryRow extends Component {
    render() {
        var category = this.props.category;
        return (
            <div>
                <tr  >
                    <th > {category} </th>
                </tr>
            </div>
        );
    }
}

class ProductTableItemsRow extends Component {
    render() {
        var product = this.props.product;
        var name = product.stocked ? product.name : <span style={{ color: 'red' }}> {product.name}</span>
        if (!product.stocked && this.props.inStockOnly)
            return null;
        return (
            <div>
                <tr  >
                    <th > {name} </th>
                    <th > {product.price} </th>
                </tr>
            </div>
        );
    }
}

class FilterableProductTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false,
            sortOnName: false,
            sortOnPrice: false
        };
        this.handelFilterTextChange = this.handelFilterTextChange.bind(this);
        this.handelCheckBoxChange = this.handelCheckBoxChange.bind(this);
        this.handleClickOnName = this.handleClickOnName.bind(this);
        this.handleClickOnPrice = this.handleClickOnPrice.bind(this);
    }

    handelCheckBoxChange() {
        this.setState({ inStockOnly: !this.state.inStockOnly });
    }

    handelFilterTextChange(e) {
        this.setState({ filterText: e.target.value });
    }

    handleClickOnName() {
        this.setState({ sortOnName: !this.state.sortOnName });
    }

    handleClickOnPrice() {
        this.setState({ sortOnPrice: !this.state.sortOnPrice });
    }

    render() {
        return (
            <div>
                <SearchBar handelCheckBoxChange={this.handelCheckBoxChange}
                    handelFilterTextChange={this.handelFilterTextChange} />
                <TableHeading handleClickOnName={this.handleClickOnName} handleClickOnPrice={this.handleClickOnPrice} />
                <ProductTable product={PRODUCTS} filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly} sortOnName={this.state.sortOnName} sortOnPrice={this.state.sortOnPrice} />
            </div>
        );
    }
}

export default FilterableProductTable;