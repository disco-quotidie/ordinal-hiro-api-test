import { InscriptionType } from "@/interfaces/inscription";

const Inscription = (props: any) => {

  const {
    address, 
    content_type, 
    id,
    mime_type,
    sat_ordinal, 
    timestamp, 
    tx_id, 
    value
  } = props.inscription;

  return (
    <div className="p-5 m-3">
      <div>address: {address}</div>
      <div>content_type: {content_type}</div>
      <div>id: {id}</div>
      <div>mime_type: {mime_type}</div>
      <div>sat_ordinal: {sat_ordinal}</div>
      <div>timestamp: {timestamp}</div>
      <div>tx_id: {tx_id}</div>
      <div>value: {value}</div>
    </div>
  )
}

export {Inscription}