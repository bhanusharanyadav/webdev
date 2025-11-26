 removeItem: function (packageName, state) {
        let items = this.getItems();
        items = items.filter(item =>
            !(item.packageName === packageName && item.state === state)
        );
        this.saveItems(items);
        this.renderCartItems();
    },

    
    
    clearCart: function () {
        localStorage.removeItem('travelCart');
        this.updateCartBadge();
        this.renderCartItems();
    },
