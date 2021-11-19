import shop from "../../api/shop";

const state = {
  items: [],
  checkoutStatus: null,
};

const getters = {
  // 获取商品名称、价格、数量
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(
        (product) => product.id === id
      );
      return {
        title: product.title,
        price: product.price,
        quantity,
      };
    });
  },

  // 获取总价格
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((p, c) => p + c.price * c.quantity, 0);
  },
};

const actions = {
  addProductToCart({ commit, state }, product) {
    commit("setCheckoutStatus", null);

    if (product.inventory > 0) {
      // 获取当前添加的cartItem
      const cartItem = state.items.find((item) => item.id === product.id);
      if (!cartItem) {
        // 如果购物车没有添加到购物车
        commit("pushProductToCart", { id: product.id });
      } else {
        // 购物车有就只加数量
        commit("incrementItemQuantity", cartItem);
      }

      // remove 1 item from stock
      // 必须开启root=true才能使用不同模块的mutations
      commit(
        "products/decrementProductInventory",
        { id: product.id },
        { root: true }
      );
    }
  },

  // 提交
  checkout({ commit, state }, products) {
    // 将购物车的东西存起来
    const savedCartItems = [...state.items];
    commit("setCheckoutStatus", null);
    // empty cart
    commit("setCartItems", { items: [] });
    // 成功的回调和失败的回调
    shop.buyProducts(
      products,
      () => commit("setCheckoutStatus", "successful"),
      () => {
        commit("setCheckoutStatus", "failed");
        commit("setCartItems", { items: savedCartItems });
      }
    );
  },
};

const mutations = {
  // 添加到购物车
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1,
    });
  },

  // 如果购物车里有这个手机就只加数量
  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find((item) => item.id === id);
    cartItem.quantity++;
  },

  // 提交状态函数
  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  },

  // 提交成功清除items
  setCartItems(state, { items }) {
    state.items = items;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
