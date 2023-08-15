import StarBox from "./StarBox";
import './RatingBox.css';
function RatingBox(props) {
  return (
    <div className="rbContainerWrap">
    <div className="rbContainer">

      <div className="edge"></div>
      
      <div className="rb">
      <div className="rbWrap">

       <StarBox star='5' StarUsers='75' TotalUsers='200'/>
       <StarBox star='4' StarUsers='75' TotalUsers='200'/>
       <StarBox star='3' StarUsers='75' TotalUsers='200'/>
       <StarBox star='2' StarUsers='75' TotalUsers='200'/>
       <StarBox star='1' StarUsers='75' TotalUsers='200'/>
      </div>
      </div></div>
     </div>
  );
}

export default RatingBox;
