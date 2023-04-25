import './style.css';

function Signature() {  
  return (
    <a
      className='signature-container'
      target="_blank"
      rel="noopener noreferrer"
      href={"https://api.whatsapp.com/send?phone=55019991550438"}
    >
      <p className='signature'>{'<dev> Bruno Riwerson Silva </dev>'}</p>
    </a>
  );
}

export default Signature;
