import React from 'react';
import {
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
} from '@ionic/react';

import './Tab1.css';
import CategoryCard from '../components/CategoryCard';

const data = [
  { image: 'bulb', subtitle: '20 Questions', category: 'Principles' },
  { image: 'bulb', subtitle: '30 Questions', category: "Gov't System" },
  {
    image: 'bulb',
    subtitle: '10 Questions',
    category: 'Rights & Responsibilities',
  },
  { image: 'bulb', subtitle: '5 Questions', category: 'History' },
  { image: 'bulb', subtitle: '26 Questions', category: 'Miscellaneous' },
  { image: 'bulb', subtitle: '40 Questions', category: 'Randomized' },
];

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Choose Study Mode</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Choose Study Mode</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            {data.map((item, id) => {
              return (
                <IonCol size="6">
                  <CategoryCard
                    image={item.image}
                    subtitle={item.subtitle}
                    category={item.category}
                  />
                </IonCol>
              );
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
