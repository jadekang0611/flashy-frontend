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
  IonRouterOutlet,
} from '@ionic/react';
import { Link } from 'react-router-dom';

import './Tab1.css';
import CategoryCard from '../components/CategoryCard';
import ModePage from './ModeTestPage';

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

const ModeListPage: React.FC = () => {
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
                  <Link to={`/main/category/${item.category}`}>
                    <CategoryCard
                      subtitle={item.subtitle}
                      category={item.category}
                    />
                  </Link>
                </IonCol>
              );
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ModeListPage;
