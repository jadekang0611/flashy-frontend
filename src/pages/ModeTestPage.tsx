import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';

interface ModeTestPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const ModeTestPage: React.FC<ModeTestPageProps> = ({ match, history }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Test by {match.params.id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>This is the category you came to {match.params.id}</h2>
      </IonContent>
    </IonPage>
  );
};

export default ModeTestPage;
