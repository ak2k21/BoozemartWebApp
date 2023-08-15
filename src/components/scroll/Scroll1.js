import {mobiscroll} from '@mobiscroll/react-lite';
import '@mobiscroll/react-lite/dist/css/mobiscroll.min.css';

export default function Scroll1() {
   
        return (
            <div className="md-layout">
                    <mobiscroll.ScrollView 
                        theme="ios"  
                        themeVariant="light"
                        layout="fixed"
                        itemWidth={80}
                        className="md-fixed"
                    >
                        <div className="bck-orange">1</div>
                        <div className="bck-red">2</div>
                        <div className="bck-green">3</div>
                        <div className="bck-yellow">4</div>
                        <div className="bck-blue">5</div>
                        <div className="bck-pink">6</div>
                    </mobiscroll.ScrollView>
                
            </div>
        );
    
}
