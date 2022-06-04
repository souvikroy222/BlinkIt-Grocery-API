const mongoose = require("mongoose");

/*const productSchema = mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  inventory: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  offer: {
    type: String,
    required: true,
  },
  images: {
    type: [],
  },
  raw: {
    attributes:
      {
        country_of_origin: {
          type: String,
          required: true,
        },
        customer_care_details: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        disclaimer: {
          type: String,
          required: true,
        },
        key_features: {
          type: String,
          required: true,
        },
        manufacturer_details: {
          type: String,
          required: true,
        },
        shelf_life: {
          type: String,
          required: true,
        },
      },    
  },
},{
    timestamps:true
});
*/

const productSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    inventory: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    newPrice: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: true,
    },
    offer: {
      type: String,
      required: true,
    },
    images: {
      type: [],
    },
    country_of_origin: {
      type: String,
      required: true,
    },
    customer_care_details: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    disclaimer: {
      type: String,
      required: true,
    },
    key_features: {
      type: String,
      required: true,
    },
    manufacturer_details: {
      type: String,
      required: true,
    },
    shelf_life: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Products", productSchema);
module.exports=Product
