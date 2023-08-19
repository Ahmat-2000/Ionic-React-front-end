import { IonButton, IonCard,IonCardContent,IonContent,IonHeader,IonInput,IonItem,IonText,IonTitle, IonToolbar } from '@ionic/react';
import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {InputData, Item} from "../Interfaces/Type";
import {yupResolver} from "@hookform/resolvers/yup";
import { useContext } from "react";
import {productContext} from "../App";
import { API, graphqlOperation  } from 'aws-amplify';
import { createProducts } from '../graphql/mutations';
import { updateProducts } from '../graphql/mutations';

const ProductInput: React.FC = () => {
  const {setProductList,setUpdateInput,updateInput} = useContext(productContext);
  const ourOnSubmit = async (data: InputData) => {
    const value = {
      name: data.name,
      price: data.price,
      quantity: data.quantity
    };   
    if(updateInput.isUpdate){
      try{
        await API.graphql(graphqlOperation(updateProducts, {input: {...value, id: updateInput.id}}));
        setProductList((prev: Item[]) =>
          prev.map((item) => (item.id === updateInput.id ? { ...item, ...value } : item))
        );
        setUpdateInput(() => ({
          id: "",
          name : "",
          price: undefined,
          quantity: undefined,
          isUpdate: false
        }));
        console.log(updateInput);
        
        window.alert("The product was updated successfuly :)");
      } catch (error) { window.alert("Server not responding :)");}
    }
    else{
      try{
        const newItem = await API.graphql(graphqlOperation(createProducts, {input: {...value}}));
        setProductList((prev: Item[]) => [...prev, newItem.data.createProducts]);
        setUpdateInput(() => ({
          id: "",
          name : "",
          price: undefined,
          quantity: undefined,
          isUpdate: false
        }));
        window.alert("The product was updated successfuly :)");
      } catch (error) { window.alert("Server not responding :)");}
    }
  }
  const validationSchema = yup.object().shape({
      name: yup.string().required().min(3,"name mus be at least 3 characters")
      .max(15,"maximun 15 characters"),
      price: yup.number().typeError("price must be a number")
      .positive("price must be a positive number")
      .min(0.01,"the minimum price is 0.01").required(),
      quantity: yup.number().typeError("Quantity must be an integer").required()
      .positive("price must be a positive number")
      .min(1,"the minimum quantity is 1").integer()
  });
  const {register, handleSubmit, formState:{errors}} = useForm<InputData>({
    resolver : yupResolver(validationSchema),
    defaultValues: {...updateInput}
  });

  return (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Product input handler</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className='ion-padding' onSubmit={handleSubmit(ourOnSubmit)}>
    <form >
        <IonCard>
          <IonCardContent>
          <IonItem className='input'>
            <IonInput {...register("name")} clearInput={true} label="Name" labelPlacement="stacked" placeholder="Enter the product name" />
          </IonItem>
          {errors.name &&
          <IonItem lines='none' className='errors'>
            <IonText>{errors.name?.message}</IonText>
          </IonItem>}
          <IonItem className='input'>
            <IonInput {...register("price")} clearInput={true} label="Price" labelPlacement="stacked" placeholder="Enter the product price" />
          </IonItem>
          {errors.price &&
          <IonItem lines='none' className='errors'>
            <IonText>{errors.price?.message}</IonText>
          </IonItem>}
          <IonItem className='input'>
            <IonInput {...register("quantity")} clearInput={true} label="Quantity" labelPlacement="stacked" placeholder="Enter the product quantity" />
          </IonItem>
          { errors.quantity &&
            <IonItem lines='none' className='errors'>
            <IonText>{errors.quantity?.message}</IonText>
          </IonItem>}
          </IonCardContent>
          <IonButton type='submit'expand='block'>Add product</IonButton>
        </IonCard>
    </form>
    </IonContent>
  </>
);
};

export default ProductInput;
