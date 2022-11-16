import sequelize from '$lib/server/orm';
import {  DataTypes } from 'sequelize';


export const product_category = sequelize.define('product_category', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.TEXT,
    allowNull: true
    // allowNull defaults to true
  }
}, {
  freezeTableName: true
});

export const product_range = sequelize.define('product_range', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.TEXT,
    allowNull: true
    // allowNull defaults to true
  }
}, {
  freezeTableName: true
});

export const product = sequelize.define('product', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
}, {
  freezeTableName: true
});

export const product_image = sequelize.define('product_image', {
  // Model attributes are defined here
  cover: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  freezeTableName: true
});

export const product_inventory = sequelize.define('product_inventory', {
  // Model attributes are defined here
  qty: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true
});


export const discount = sequelize.define('discount', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  percent: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
}, {
  freezeTableName: true
});

export const user = sequelize.define('user', {
  // Model attributes are defined here
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: true
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true
  }
 
}, {
  freezeTableName: true
});

export const user_adress = sequelize.define('user_adress', {
  // Model attributes are defined here
  adressLine1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  adressLine2: {
    type: DataTypes.STRING,
    allowNull: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true
  },
  postalCode: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: true
  }
 
}, {
  freezeTableName: true
});
export const shopping_session = sequelize.define('shopping_session', {
  // Model attributes are defined here
  total: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
}, {
  freezeTableName: true
});

export const cart_item = sequelize.define('cart_item', {
  // Model attributes are defined here
  qty: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true
});

export const order_detail = sequelize.define('order_detail', {
  // Model attributes are defined here
  total: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true
});

export const order_item = sequelize.define('order_item', {
  // Model attributes are defined here
  qty: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true
});

export const track_time = sequelize.define('track_time', {
  // Model attributes are defined here
  spentTime: {
    type: DataTypes.TIME,
    allowNull: false
  }
}, {
  freezeTableName: true
});

export const payment_detail = sequelize.define('payment_detail', {
  // Model attributes are defined here
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  provider: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  freezeTableName: true
});

export const user_payment = sequelize.define('user_payment', {
  // Model attributes are defined here
  paymentType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  provider: {
    type: DataTypes.STRING,
    allowNull: false
  },
  accountNo: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true
});


export const store = sequelize.define('store', {
  // Model attributes are defined here
  adressLine: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postalCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  latitude: {
    type: DataTypes.STRING,
    allowNull: false
  },
  longitude: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true
});
product_range.hasMany(product_category);
product_category.belongsTo(product_range);

product.hasMany(product_image);
product_image.belongsTo(product);

product_category.hasMany(product);
product.belongsTo(product_category);

product.hasMany(discount);
product.hasMany(product_inventory);
product_inventory.belongsTo(product);
discount.belongsTo(product);

user.hasMany(shopping_session);
shopping_session.belongsTo(user);

shopping_session.hasMany(cart_item);
cart_item.belongsTo(shopping_session);

product.hasMany(cart_item)
cart_item.belongsTo(product)

user.hasMany(order_detail);
order_detail.belongsTo(user)

order_detail.hasMany(order_item);
order_item.belongsTo(order_detail);

product.hasMany(order_item);
order_item.belongsTo(product);

order_detail.hasOne(payment_detail);
payment_detail.belongsTo(order_detail);

user.hasMany(user_payment);
user_payment.belongsTo(user);

user.hasOne(user_adress);
user_adress.belongsTo(user);

product.hasMany(track_time);
track_time.belongsTo(product);

user.hasMany(track_time);
track_time.belongsTo(user);