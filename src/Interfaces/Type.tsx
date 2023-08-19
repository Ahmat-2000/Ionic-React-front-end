export interface Item {
    id: string;
    name: string;
    price: number;
    quantity: number;
};

export interface oneItem{
    item : Item;
}

export interface InputData {
    name: string;
    price: number;
    quantity: number;
};

export interface UpdatecontextType{
    id: string;
    name: string;
    price: number | undefined ;
    quantity: number | undefined ;
    isUpdate: boolean;
}