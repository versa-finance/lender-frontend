import React from 'react';
import {Card, CardBody, CardText,} from 'reactstrap';

const NormalCard = ({cardStyle}) => {
    return (
        <Card className={`${cardStyle}`}>
            <CardBody>
                <CardText>
                    Only card’s body with some textual content
                    which could be couple paragraphs.
                </CardText>
            </CardBody>
        </Card>
    );
};
export default NormalCard;