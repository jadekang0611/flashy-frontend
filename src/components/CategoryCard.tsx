import React from 'react';
import './ExploreContainer.css';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from '@ionic/react';
import { image } from 'ionicons/icons';

interface ContainerProps {
  image: string;
  subtitle: string;
  category: string;
}

const CategoryCard: React.FC<ContainerProps> = ({ subtitle, category }) => {
  return (
    <div className="container">
      <IonCard>
        {/* <img src={image} alt={category} /> */}
        <IonCardHeader>
          <IonCardSubtitle>{subtitle}</IonCardSubtitle>
          <IonCardTitle>{category}</IonCardTitle>
        </IonCardHeader>
      </IonCard>
    </div>
  );
};

export default CategoryCard;
