import axios from 'axios';

const state = {
    products: []
};

const getters = {
    allProducts: state => state.products
};
const actions = {
    async fetchProducts({ commit }) {
        const response = await
       await axios({
            method: 'post',
            url: 'api/products/list',
        });
        commit('setProducts', response.data);
    },
    async addProduct({ commit }, title) {
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos',
            { title, completed: false }
        );

        commit('newProduct', response.data);
    },
    async deleteProduct({ commit }, id) {
        await axios.delete(`api/products/${id.id}`);

        commit('removeProduct', id.id);
    },
    async filterProducts({ commit }, e) {
        // Get selected number
        const limit = parseInt(
            e.target.options[e.target.options.selectedIndex].innerText
        );

        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
        );

        commit('setProducts', response.data);
    },
    async updateProduct({ commit }, updProduct) {
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/todos/${updProduct.id}`,
            updProduct
        );

        console.log(response.data);

        commit('updateProduct', response.data);
    }
};

const mutations = {
    setProducts: (state, products) => (state.products = products),
    newProduct: (state, product) => state.products.unshift(product),
    removeProduct: (state, id) =>
        (state.products = state.products.filter(product => product.id !== id)),
    updateProduct: (state, updProduct) => {
        const index = state.products.findIndex(product => product.id === updProduct.id);
        if (index !== -1) {
            state.products.splice(index, 1, updProduct);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};