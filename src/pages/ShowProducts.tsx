import { IonCol, IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import Product from '../components/Product';
import { Item } from '../Interfaces/Type';
import { useEffect, useState , useContext} from 'react';
import { API, graphqlOperation  } from 'aws-amplify';
import { listProducts } from '../graphql/queries';
import {productContext} from "../App";

const ShowProducts: React.FC = () => {
  const {productsList, setProductsList} = useContext(productContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const productData = await API.graphql(graphqlOperation(listProducts));
      const products = productData.data.listProducts.items;
      setProductsList(products);
      setLoading(false); // Set loading to false after data is fetched
    } catch (err:any) {
      setError(err);
      setLoading(false); // Set loading to false on error
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error)  return <p>Error : {error}</p>;

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List of all products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <div className='ion-margin'> 
        <IonGrid fixed={true}>
            <IonRow>
                <IonCol className="center">Name</IonCol>
                <IonCol className="center">Price</IonCol>
                <IonCol className="center">Quantity</IonCol>
                <IonCol className="center">Delete</IonCol>
                <IonCol className="center">Update</IonCol>
            </IonRow>
            {
                productsList.map((prod: Item) => (<Product item={prod} key={prod.id} />) )
            }
        </IonGrid>
        </div>
      </IonContent>
    </>
  );
};

export default ShowProducts;
