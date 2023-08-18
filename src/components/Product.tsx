import { IonButton, IonCol, IonIcon, IonRow } from "@ionic/react";
import React from "react";
import { Item, oneItem } from "../Interfaces/Type";
import { trashSharp, pencilSharp } from "ionicons/icons";
import { useMutation , gql} from "@apollo/client";
import { useHistory } from 'react-router-dom';
import { useContext } from "react";
import {productContext} from "../App";
import { API, graphqlOperation  } from 'aws-amplify';
import { deleteProducts } from '../graphql/mutations';

const Product: React.FC<oneItem> = (props) => {
    const {setProductsList,setUpdateInput} = useContext(productContext);
    const navigate = useHistory();
    const item = props.item;
    const trashButtonHandler = async () => {
        const confirm = window.confirm("Do you realy want to delete this Item ?");
        if(confirm){
            try {
                await API.graphql(graphqlOperation(deleteProducts, {input: {id: item.id }}));
                setProductsList((prev:Item[]) =>  prev.filter((val) => val.id !== item.id) );
                window.alert("The product was deleted successfuly :)");
            } catch (error) { window.alert("Server not responding :)");}
        } 
    };
    const UpdateButtonHandler = (e:React.MouseEvent<HTMLIonButtonElement, MouseEvent> ) => {
        e.preventDefault();
        setUpdateInput(() => ({
            id: item.id,
            name : item.name,
            price: item.price,
            quantity: item.quantity,
            isUpdate: true
        }));
        navigate.push("/productInput");
    };
    return (
    <IonRow className="grille">
        <IonCol className="center" >{item.name}</IonCol>
        <IonCol className="center">{item.price}</IonCol>
        <IonCol className="center">{item.quantity}</IonCol>
        <IonCol className="center" >
            <IonButton onClick={trashButtonHandler} className="grid-button">
                <IonIcon color="danger" icon={trashSharp}/> 
            </IonButton >
        </IonCol>
        <IonCol className="center">
            <IonButton onClick={(e) => UpdateButtonHandler(e)} color="success" className="grid-button">
                <IonIcon className="grid-button" color="danger" icon={pencilSharp}/>
            </IonButton>
        </IonCol>
    </IonRow>
    );
};

export default Product;
