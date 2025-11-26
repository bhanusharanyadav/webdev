  addItem: function (item) {
        const items = this.getItems();

        // Check if item already exists
        const existingIndex = items.findIndex(i =>
            i.packageName === item.packageName && i.state === item.state
        );

        if (existingIndex > -1) {
            alert('This package is already in your cart!');
            return false;
        }

        items.push({
            packageName: item.packageName,
            state: item.state,
            price: item.price,
            days: item.days,
            features: item.features || [],
            addedAt: new Date().toISOString()
        });

        this.saveItems(items);
        return true;
    },
