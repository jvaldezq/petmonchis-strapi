import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductProductVariant extends Schema.Component {
  collectionName: 'components_product_product_variants';
  info: {
    displayName: 'product variant';
    description: '';
  };
  attributes: {
    price: Attribute.BigInteger & Attribute.Required;
    size: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product.product-variant': ProductProductVariant;
    }
  }
}
