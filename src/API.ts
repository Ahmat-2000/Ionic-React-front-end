/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductsInput = {
  id?: string | null,
  name: string,
  price: number,
  quantity: number,
};

export type ModelProductsConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  quantity?: ModelIntInput | null,
  and?: Array< ModelProductsConditionInput | null > | null,
  or?: Array< ModelProductsConditionInput | null > | null,
  not?: ModelProductsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Products = {
  __typename: "Products",
  id: string,
  name: string,
  price: number,
  quantity: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductsInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  quantity?: number | null,
};

export type DeleteProductsInput = {
  id: string,
};

export type ModelProductsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  quantity?: ModelIntInput | null,
  and?: Array< ModelProductsFilterInput | null > | null,
  or?: Array< ModelProductsFilterInput | null > | null,
  not?: ModelProductsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProductsConnection = {
  __typename: "ModelProductsConnection",
  items:  Array<Products | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionProductsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionProductsFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateProductsMutationVariables = {
  input: CreateProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type CreateProductsMutation = {
  createProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    price: number,
    quantity: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductsMutationVariables = {
  input: UpdateProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type UpdateProductsMutation = {
  updateProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    price: number,
    quantity: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductsMutationVariables = {
  input: DeleteProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type DeleteProductsMutation = {
  deleteProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    price: number,
    quantity: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProductsQueryVariables = {
  id: string,
};

export type GetProductsQuery = {
  getProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    price: number,
    quantity: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductsConnection",
    items:  Array< {
      __typename: "Products",
      id: string,
      name: string,
      price: number,
      quantity: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProductsSubscriptionVariables = {
  filter?: ModelSubscriptionProductsFilterInput | null,
};

export type OnCreateProductsSubscription = {
  onCreateProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    price: number,
    quantity: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductsSubscriptionVariables = {
  filter?: ModelSubscriptionProductsFilterInput | null,
};

export type OnUpdateProductsSubscription = {
  onUpdateProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    price: number,
    quantity: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductsSubscriptionVariables = {
  filter?: ModelSubscriptionProductsFilterInput | null,
};

export type OnDeleteProductsSubscription = {
  onDeleteProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    price: number,
    quantity: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
