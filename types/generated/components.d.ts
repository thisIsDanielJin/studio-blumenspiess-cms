import type { Schema, Struct } from '@strapi/strapi';

export interface TextPersoninnen extends Struct.ComponentSchema {
  collectionName: 'components_text_personinnens';
  info: {
    description: '';
    displayName: 'Personinnen';
    icon: 'user';
  };
  attributes: {
    Person: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'text.personinnen': TextPersoninnen;
    }
  }
}
