import React from "react";
import {IonGrid,IonRow,IonCol} from '@ionic/react';

export const BaseGrid : React.FC =({children})=>{
    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    {children}
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}