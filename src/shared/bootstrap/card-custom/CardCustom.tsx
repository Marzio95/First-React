
import React from "react";
import { BootstrapType } from "../model/BootstrapType";

interface CardCustomProps {
    title: string;
    children: React.ReactNode;
    classList?: string[];
    headerClass?: BootstrapType[];
    bodyClass?: BootstrapType[];
}

const CardCustom: React.FC<CardCustomProps> = ({title, children, classList = [], headerClass = [], bodyClass = []}) => {

    const listClass = ['card', 'm-3',...classList];
    const listHeader = ['card-header', ...headerClass];
    const listBody = ['card-body', ...bodyClass];

    return  (
        <div className= {listClass.join(' ')}>
            
            <div className= {listHeader.join(' ')}>
                {title}
            </div>

            <div className= {listBody.join(' ')}>
                {children}
            </div>

        </div>
    )
}

export default CardCustom;