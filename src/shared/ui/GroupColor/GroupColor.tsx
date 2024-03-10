import {FC} from 'react';

interface Props {
    color?: string
}

const GroupColor: FC<Props> = ({color}) => {
    return (
        <div style={{ width: '20px', height: '20px', backgroundColor: color, borderRadius: "50%"}}>

        </div>
    );
};

export default GroupColor;